import { reduce } from 'lodash';
import { STRING, NUMBER, ARRAY } from '../../types';
import { STRING_INPUT, NUMBER_INPUT, ARRAY_INPUT } from '../../typesMapper';

const schemaTransformer = (schema) => reduce(schema, (result, value, key) => {
  if (typeof(value) === 'object') {
    result[key] = schemaTransformer(value);
  }

  switch(value) {
    case STRING:
      result[key] = STRING_INPUT;
      break;
    case NUMBER:
      result[key] = NUMBER_INPUT;
      break;
    case ARRAY:
      result[key] = ARRAY_INPUT;
      break;
  }

  return result;
}, {});

export default schemaTransformer;
