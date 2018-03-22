import React from 'react';
import { map, range, size, merge, values } from 'lodash';

class ArrayInputComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputsCount : 1,
      inputsValues : {}
    };

    this.inputChanged= this.inputChanged.bind(this);
  }

  inputChanged(e) {
    const { inputsCount, inputsValues } = this.state;

    this.setState({
      inputsValues: merge(inputsValues, { [e.target.id]: e.target.value }),
      inputsCount : inputsCount == size(inputsValues) ? inputsCount + 1 : inputsCount
    });

    this.props.onComponentValuesChanged({ [this.props.propertyName]: values(inputsValues) })
  }

  render() {
    const { propertyName } = this.props;

    return(
      <div className='array-input'>
        <label>{propertyName}</label>
        {
          map(range(this.state.inputsCount ), (i) => {
            return <input key={i} id={i} onChange={this.inputChanged} />
          })
        }
      </div>
    )
  }
}

export default ArrayInputComponent;
