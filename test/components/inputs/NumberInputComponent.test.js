import React from 'react';
import { shallow } from 'enzyme';

import { NumberInputComponent } from '../../../src/components/inputs';

describe('<NumberInputComponent />', () => {
  it('renders <NumberInputComponent /> component', () => {
    const props = {
      propertyName: 'name'
    };

    const wrapper = shallow(<NumberInputComponent {...props} />);
    const label = wrapper.find('label');
    const input = wrapper.find('input');

    expect(label.text()).to.eq('name');
    expect(input.props()).to.deep.include({ value: 0 });
  });

  context('when the input value changes', () => {
    const props = {
      propertyName: 'property_name',
      onComponentValuesChanged: sinon.spy()
    };

    const wrapper = shallow(<NumberInputComponent {...props} />);
    const input = wrapper.find('input');

    context('and the value is not a number', () => {
      it('does not call the props onChange callback', () => {
        input.simulate('change', { target: { value: 'NaN' } });
        expect(props.onComponentValuesChanged).to.not.have.been.called;
      });
    });

    context('and the value is a number', () => {
      it('calls the props onChange callback with the changed input value', () => {
        input.simulate('change', { target: { value: 50 } });
        expect(props.onComponentValuesChanged).to.have.been.calledWith({ [props.propertyName]: 50 });
      });
    });
  });
});
