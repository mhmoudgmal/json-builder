import React from 'react';

class SectionComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onPropertyNameChanged = this.onPropertyNameChanged.bind(this);
  }

  onPropertyNameChanged(e) {
    const value = e.target.value;

    if (value) {
      this.setState({ propertyName: value });
    }
  }

  render() {
    const { name, propertyValue, createChildren, onComponentValuesChanged } = this.props;
    const { propertyName } = this.state;

    return <div className='section' id={name}>
      {
        name.startsWith('$') ?
        <input
          className='section-input'
          placeholder={name.replace('$', '')}
          onChange={this.onPropertyNameChanged}
        /> :
        name
      }

      {
        createChildren(
          propertyValue,
          (value) => onComponentValuesChanged({ [propertyName || name]: value })
        )
      }
    </div>
  }
}

export default SectionComponent;
