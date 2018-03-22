import React from 'react';
import { shallow } from 'enzyme';

import { TextInputComponent } from '../../../src/components/inputs';

describe('<TextInputComponent />', () => {
  it('renders <TextInputComponent /> component', () => {
    const props = {
      propertyName: 'name',
      placeHolder: 'placeholder...'
    };

    const wrapper = shallow(<TextInputComponent {...props} />);
    const label = wrapper.find('label');
    const input = wrapper.find('input');

    expect(label.text()).to.eq('name');
    expect(input.props()).to.deep.include({placeholder: 'placeholder...'});
  });

  context('when the input value changes', () => {
    it('calls the props onChange callback with the chnaged input value', () => {
      const props = {
        propertyName: 'property_name',
        onComponentValuesChanged: sinon.spy()
      };

      const wrapper = shallow(<TextInputComponent {...props} />);
      const input = wrapper.find('input');

      input.simulate('change', { target: { value: 'something' } });

      expect(props.onComponentValuesChanged).to.have.been.calledWith(
        { [props.propertyName]: 'something' }
      );
    });
  });
});
