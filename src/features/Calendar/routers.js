import React from 'react';
import { Route } from 'react-router';
import Calendar from './containers';

const routes = [
  <Route key="calendar" path="/calendar" component={Calendar}></Route>
];

export default routes;