import React from 'react';
import Menu from './index';
import sinon from 'sinon';
import { expect } from 'chai';
import {wrapShallowComponent} from '../../../../../test/helper';
describe('<Menu/>', () =>{
  const items = [
    { name: 'Calendar', path: 'calendar' },
    { name: 'List', path: 'list' },
  ];

  test('menu items size should be 2', () =>{
    const wrapper = wrapShallowComponent(Menu);
    const menu = wrapper({items});
    expect(menu.find('li').length).to.equal(2);
  });

  test('first menu item context should be Calendar', () => {
    const wrapper = wrapShallowComponent(Menu);
    const menu = wrapper({items});
    expect(menu.find('li').first().text()).to.equal('Calendar');
  })

  test('click menu item should trigger jest fn successfully', () => {
    const wrapper = wrapShallowComponent(Menu);
    const mockFn = jest.fn();
    const menu = wrapper({items, onClick: mockFn});
    menu.find('li').first().simulate('click');
    expect(mockFn.mock.calls[0][0]).to.deep.equal({ name: 'Calendar', path: 'calendar' });
  });

  test('click menu item should trigger sinon successfully', ()=>{
    const wrapper = wrapShallowComponent(Menu);
    const mockFn = sinon.spy(item=>item);
    const menu = wrapper({items, onClick: mockFn});
    menu.find('li').first().simulate('click');
    expect(mockFn.calledWith({ name: 'Calendar', path: 'calendar' })).to.equal(true);
  });

})