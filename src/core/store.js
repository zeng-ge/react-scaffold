import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import history from './history';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

let store = null;
if(process.env.NODE_ENV ==='production'){
  store = createStore(combineReducers({
    ...reducers,
    router: routerReducer
  }), applyMiddleware(routerMiddleware(history), promiseMiddleware(), reduxThunk))
}else{
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(combineReducers({
    ...reducers,
    router: routerReducer
  }), composeEnhancers(
    applyMiddleware(routerMiddleware(history), promiseMiddleware(), reduxThunk)
  ))
  if (module.hot) module.hot.accept(['./reducers'], () => {
    let nextReducers = require('./reducers').default;
    store.replaceReducer(combineReducers({
      ...nextReducers,
      router: routerReducer
    }));
  });
}



export default store;
