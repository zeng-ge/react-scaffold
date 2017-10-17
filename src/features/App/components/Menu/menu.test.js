import React from 'react';
import Menu from './index';
import {wrapShallowComponent} from '../../../../../test/helper';
describe('<Menu/>', () =>{
  const items = [
    { name: 'Calendar', path: 'calendar' },
    { name: 'List', path: 'list' },
  ];
  test('menu items size should be 2', () =>{
    const wrapper = wrapShallowComponent(Menu);
    const menu = wrapper({items});
    expect(menu.find('li').length).toBe(2);
  });
  test('first menu item context should be Calendar', () => {
    const wrapper = wrapShallowComponent(Menu);
    const menu = wrapper({items});
    expect(menu.find('li').first().text()).toEqual('Calendar');
  })
})