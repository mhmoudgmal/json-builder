import { schemaTransformer } from '../../src/services';

import {
  TextInputComponent,
  NumberInputComponent,
  ArrayInputComponent
} from '../../src/components/inputs';

describe('schema transformation', () => {
  context('empty schema', () => {
    const schema = {};

    it('should return empty transformed schema', () => {
      expect(schemaTransformer(schema)).to.eql({});
    });
  });

  context('simple string schema', () => {
    const schema = { nameProperty: 'string' };

    it('should transform to TextInputComponent', () => {
      expect(schemaTransformer(schema)).to.eql({ nameProperty: TextInputComponent });
    });
  });

  context('simple number schema', () => {
    const schema = { numberProperty: 'number' };

    it('should transform to NumberInputComponent', () => {
      expect(schemaTransformer(schema)).to.eql({ numberProperty: NumberInputComponent });
    });
  });

  context('simple array schema', () => {
    const schema = { arrayProperty: 'array' };

    it('should transform to ArrayInputComponent', () => {
      expect(schemaTransformer(schema)).to.eql({ arrayProperty: ArrayInputComponent });
    });
  });

  context('complex schema', () => {
    // imaginary example schema
    const schema = {
      api_name: 'string',
      description: 'string',
      params: {
        locale: {
          include: 'array'
        }
      },
      versions: {
        v1: 'number',
        v2: 'number'
      }
    };

    it('should transform correspondingly', () => {
      expect(schemaTransformer(schema)).to.eql({
        api_name: TextInputComponent,
        description: TextInputComponent,
        params: {
          locale: {
            include: ArrayInputComponent
          }
        },
        versions: {
          v1: NumberInputComponent,
          v2: NumberInputComponent
        }
      });
    });
  });
});
