import React from 'react';

class TextInputComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.changeInput = this.changeInput.bind(this);
  }

  changeInput(e) {
    this.props.onComponentValuesChanged(
      { [this.props.propertyName]: e.target.value }
    )
  }

  render() {
    const { propertyName, placeHolder } = this.props;

    return(
      <div className='text-input' id={propertyName}>
        <label>{propertyName}</label>
        <input
          placeholder={placeHolder}
          onChange={this.changeInput}>
        </input>
      </div>
    )
  }
}

export default TextInputComponent;
