import chai, { expect } from 'chai';
import jsdomify from 'jsdomify';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';

global.expect = expect;
global.sinon = sinon;

chai.use(sinonChai);

Enzyme.configure({ adapter: new Adapter() });

jsdomify.create();

before(() => jsdomify.create());

beforeEach(() => jsdomify.clear());

after(() => {
  jsdomify.destroy();
})
