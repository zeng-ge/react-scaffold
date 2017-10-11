import _ from 'lodash';
import registry from './registry';

const features = registry();
const reducers = _.reduce(features, (accumulator, feature, key) => {
  if(feature.reducer){
    accumulator[key] = feature.reducer;
  }
  return accumulator;
}, {})
export default reducers;