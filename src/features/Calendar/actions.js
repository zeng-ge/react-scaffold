import _ from 'lodash';
import moment from 'moment';
import {ACTION_TYPES} from 'CONSTANT';
const getInitialState = () => {
  return {
    calendar: moment()
  }
};

const actions = {
  [ACTION_TYPES.CALENDAR.SET_CALENDAR]: (state, action) => {
    return Object.assign({}, state, {calendar: action.data})
  }
}

export default function reducer(state = getInitialState(), action){
  const reducerAction = actions[action.type];
  return _.isFunction(reducerAction) ? reducerAction(state, action) : state;
}

/**
 * actions
 * */
export const setCalendar = (data) => ({
  type: ACTION_TYPES.CALENDAR.SET_CALENDAR,
  data
})