import React from 'react';
import { shallow } from 'enzyme';

import { SectionComponent } from '../../../src/components/inputs';

describe('<SectionComponent />', () => {
  describe('when propertyName is not a placeholder (e.g does not start with $)', () => {
    const props = {
      name: 'name',
      propertyValue: 'value',
      createChildren: sinon.stub(),
      onComponentValuesChanged: sinon.stub()
    };

    const wrapper = shallow(<SectionComponent {...props} />);
    const div = wrapper.find('div');

    it('renders div as a section', () => {
      expect(div.text()).to.eql('name');
    });

    it('calls createChildren', () => {
      expect(props.createChildren).to.have.been.calledWith(
        props.propertyValue,
        sinon.match.func
      );
    });
  });

  describe('when propertyName starts with $', () => {
    const props = {
      name: '$name',
      createChildren: sinon.stub(),
      onComponentValuesChanged: sinon.stub()
    };

    const wrapper = shallow(<SectionComponent {...props} />);
    const input = wrapper.find('input');

    it('renders input field as placeholder for the value of the propertyName', () => {
      expect(input.props()).to.deep.include({ placeholder: props.name.replace('$', '') });
    });

    it('calls createChildren', () => {
      expect(props.createChildren).to.have.been.calledWith(
        props.propertyValue,
        sinon.match.func
      );
    });

    it('calls onComponentValuesChanged when the input value changes', () => {
      input.simulate('change', { target: { value: 'some value' } });
      expect(props.onComponentValuesChanged).to.have.been.calledWith({
        [props.name]: { [`${props.name}_val`]: 'some value' }
      })
    });
  });
});
