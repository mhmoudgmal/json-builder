import React from 'react';
import { shallow } from 'enzyme';

import { ArrayInputComponent } from '../../../src/components/inputs';

describe('<ArrayInputComponent />', () => {
  describe('default', () => {
    it('renders <ArrayInputComponent /> component with one input', () => {
      const props = {
        propertyName: 'name'
      };

      const wrapper = shallow(<ArrayInputComponent {...props} />);
      const label = wrapper.find('label');
      const inputs = wrapper.find('input');

      expect(label.text()).to.eq('name');
      expect(inputs).to.have.length(1);
    });
  });

  context('when input value changes', () => {
    const props = {
      propertyName: 'name',
      onComponentValuesChanged: sinon.spy()
    };

    it('calls the onChange callback', () => {
      const wrapper = shallow(<ArrayInputComponent {...props} />);
      const input = wrapper.find('input');

      input.simulate('change', { target: { value: 'some_value' } });

      expect(props.onComponentValuesChanged).to.have.been.calledWith({
        [props.propertyName]: ['some_value']
      });
    });

    it('adds one more input', () => {
      const wrapper = shallow(<ArrayInputComponent {...props} />);
      const input = wrapper.find('input');

      input.simulate('change', { target: { value: 'some_value' } });

      expect(wrapper.find('input')).to.have.length(2);
    });
  });
});
