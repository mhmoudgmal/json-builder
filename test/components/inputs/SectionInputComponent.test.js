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
});
