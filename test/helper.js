import React from 'react';
import { shallow } from 'enzyme';

export const wrapShallowComponent = (Component) => {
  return (props, options) => {
    return shallow(<Component {...props}/>, Object.assign({}, options));
  }
}