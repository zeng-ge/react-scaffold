import _ from 'lodash';
import {ACTION_TYPES} from 'CONSTANT';
const getInitialState = () => {
  return {
    list: []
  }
};

const actions = {
  [ACTION_TYPES.LIST.SET_LIST]: (state, action) => {
    return Object.assign({}, state, {list: action.data})
  }
}

export default function reducer(state = getInitialState(), action){
  const reducerAction = actions[action.type];
  return _.isFunction(reducerAction) ? reducerAction(state, action) : state;
}

/**
 * actions
 * */
export const setList = (data) => ({
  type: ACTION_TYPES.LIST.SET_LIST,
  data
})