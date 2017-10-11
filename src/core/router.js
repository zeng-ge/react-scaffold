import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Switch } from 'react-router-dom';
import _ from 'lodash';
import history from './history';
import App from '../features/App/containers';
import registry from './registry';


const features = registry();
const routes = _.reduce(features, (accumulator, feature) => {
  return _.concat(accumulator, feature.routes);
}, []);

export default (
  <ConnectedRouter history={history}>
    <App>
      <Switch>
        {routes}
      </Switch>
    </App>
  </ConnectedRouter>
)
