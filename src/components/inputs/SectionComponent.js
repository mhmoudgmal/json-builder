import React from 'react';

class SectionComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { name, propertyValue, createChildren, onComponentValuesChanged } = this.props;

    return <div className='section' id={name}>
      {
        name
      }

      {
        createChildren(
          propertyValue,
          (value) => onComponentValuesChanged({ [name]: value })
        )
      }
    </div>
  }
}

export default SectionComponent;
