import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

export const wrapShallowComponent = (Component) => {
  return (props, options) => {
    return shallow(<Component {...props}/>, Object.assign({}, options));
  }
}

export const getMockStore = () => {
  const middlewares = [promiseMiddleware(), reduxThunk];
  const mockStore = configureMockStore(middlewares);
  return mockStore;
};