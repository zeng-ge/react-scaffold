import React from 'react';
import { Route } from 'react-router';
import Calendar from '../Calendar/containers';

const routes = [
  <Route key="/" exact={true} path="/" component={Calendar}></Route>
];

export default routes;