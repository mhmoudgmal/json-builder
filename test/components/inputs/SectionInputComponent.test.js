import React from 'react';
import { shallow } from 'enzyme';

import { SectionComponent } from '../../../src/components/inputs';

describe('<SectionComponent />', () => {
  context('when propertyName is not a placeholder (e.g does not start with $)', () => {
    const props = {
      name: 'name',
      propertyValue: 'value',
      createChildren: sinon.spy()
    };

    const wrapper = shallow(<SectionComponent {...props} />);
    const div = wrapper.find('div');

    it('renders div as a section', () => {
      expect(div.text()).to.eql('name');
    });

    it('calls createChildren', () => {
      expect(props.createChildren).to.have.been.called;
    });
  });

  context('when propertyName starts with $', () => {
    const props = {
      name: '$name',
      createChildren: sinon.spy(),
    };

    const wrapper = shallow(<SectionComponent {...props} />);
    const input = wrapper.find('input');

    it('renders input field as placeholder for the value of the propertyName', () => {
      expect(input.props()).to.deep.include({ placeholder: props.name.replace('$', '') });
    });

    it('calls createChildren', () => {
      expect(props.createChildren).to.have.been.called;
    });

    context('and input value changed', () => {
      it('changes tthe state of propertyName', () => {
        input.simulate('change', { target: { value: 'something' } });
        expect(wrapper.state()).to.eql( { propertyName: 'something' } );
      });
    });
  });
});
