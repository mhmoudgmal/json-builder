import React from 'react';

const NUMBER_REGX = /^[0-9]+$/;

class NumberInputComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };

    this.changeInput = this.changeInput.bind(this);
  }

  changeInput(e, parent) {
    const value = e.target.value;

    if (NUMBER_REGX.test(value) || value === '') {
      this.setState({
        value
      });

      this.props.onComponentValuesChanged({ [this.props.propertyName]: parseFloat(value) || 0 })
    }
  }

  render() {
    const { propertyName } = this.props;
    const { value } = this.state;

    return(
      <div className='number-input'>
        <label>{propertyName}</label>
        <input
          name={propertyName}
          value={value}
          onChange={(e) => this.changeInput(e, parent)}>
        </input>
      </div>
    )
  }
}

export default NumberInputComponent;
