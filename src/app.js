import React from 'react';
import ReactDOM from 'react-dom';
import { map, merge } from 'lodash';

import { OBJECT } from '../types';
import schema from '../exampleSchema';
import { schemaTransformer } from './services'
import { SectionComponent } from './components/inputs';

import styles from './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.transformedSchema = schemaTransformer(this.props.schema);

    this.onComponentValuesChanged = this.onComponentValuesChanged.bind(this);
  }

  onComponentValuesChanged(values) {
    this.setState(merge(this.state, values))
  }

  mapSchemaToComponents(schema, componentValuesChanged) {
    return map(schema, (propertyValue, propertyName) => {
      if (typeof(propertyValue) === OBJECT) {
        return(
          <SectionComponent
            key={propertyName}
            name={propertyName}
            propertyValue={propertyValue}
            onComponentValuesChanged={componentValuesChanged}
            createChildren={(schema, fn) => this.mapSchemaToComponents(schema, fn)}
          />
        )
      }

      return React.createElement(
        propertyValue,
        {
          key: propertyName,
          propertyName,
          placeHolder: '',
          onComponentValuesChanged: componentValuesChanged
        }
      )
    });
  }

  render() {
    return (
      <div>
        <div className='generatedjson'>
          <pre>{JSON.stringify(this.state, null, 2) }</pre>
        </div>

        <div className='jsonbuilder'>
          <div className='compontents'>
            {this.mapSchemaToComponents(this.transformedSchema, this.onComponentValuesChanged)}
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App schema={schema}/>, document.getElementById('root'));
