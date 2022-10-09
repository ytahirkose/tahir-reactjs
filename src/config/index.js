import {dev} from './dev';
import {prod} from './prod';
import {test} from './test';


const conf = {
  dev,
  prod,
  test,
};
const env = {
  ...conf[process.env.REACT_APP_STAGE],
};
export default env;
