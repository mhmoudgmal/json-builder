import React from 'react';

class SectionComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      propertyValue,
      createChildren,
      onComponentValuesChanged
    } = this.props;

    return <div className='section' id={name}>
      {
        name.startsWith('$') ?
        <input
          className='section-input'
          placeholder={name.replace('$', '')}
          onChange={(e) => onComponentValuesChanged({
              [name]: { [`${name}_val`]: e.target.value }
            })
          }
        /> :
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
