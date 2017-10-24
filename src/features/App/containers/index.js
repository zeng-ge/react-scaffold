import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {APP_NAME} from 'CONSTANT';
import Menu from '../components/Menu';
import './index.scss';

const menuItems = [
  { name: 'Calendar', path: 'calendar' },
  { name: 'List', path: 'list' },
];

export default class App extends Component{

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props, context){
    super(props, context);
    const path = _.get(context, 'router.route.location.pathname', '');
    let activeItem =  _.find(menuItems, item => `/${item.path}` === path) || menuItems[0];
    this.state = {activeItem};
  }

  onChangeMenu(item){
    this.setState({activeItem: item});
    this.context.router.history.push(item.path);
  }

  render(){
    return (
      <div className="app">
        <header>
          <h1>{APP_NAME}</h1>
        </header>
        <div className="app-body">
          <aside>
            <Menu items={menuItems} onClick={::this.onChangeMenu} activeItem={this.state.activeItem}/>
          </aside>
          <main>{this.props.children}</main>
        </div>
      </div>
    )
  }
}