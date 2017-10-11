import React from 'react';
import { Route } from 'react-router';
import List from './containers';

const routes = [
  <Route key="list" path="/list" component={List}></Route>
];

export default routes;