import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames/bind';
import scss from './index.scss';

const cx = classNames.bind(scss);

export default class Menu extends Component{

  static propTypes = {
    items: PropTypes.array,
    activeItem: PropTypes.object,
    onClick: PropTypes.func
  }

  static defaultProps = {
    items: [],
    activeItem: {},
    onClick: () => {}
  }

  constructor(props){
    super(props);
  }

  onClick= (item)=> (event) => {
    this.props.onClick(item);
  }

  render(){
    const { items } = this.props;
    return (
      <ul className="menu">
        {
          _.map(items, item => {
            return (
              <li key={item.path}
                  className={cx({active: item === this.props.activeItem})}
                  onClick={this.onClick(item)}>{item.name}</li>
            )
          })
        }
      </ul>
    )
  }
}