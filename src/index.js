import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from './core/store';
import router from './core/router';

const rootEl = document.getElementById('app');

if(process.env.NODE_ENV === 'production'){
  ReactDOM.render(<Provider store={store}>{router}</Provider>, rootEl);
}else{
  let render = r =>{
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>{r}</Provider>
      </AppContainer>, rootEl);
  }
  render(router);
  /**
   * 这里要特别注意加载的文件,指定的不对或者缺省都会导致热加载失败
   * 一般指定顶层文件即可
   * 现在的App会在router中指定,所以这里不用重新加载了
   * */
  if (module.hot) module.hot.accept(['./core/router'], () => {
    let nextRouter = require('./core/router').default;
    render(nextRouter);
  });
}





