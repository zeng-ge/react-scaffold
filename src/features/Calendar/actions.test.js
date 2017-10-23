import mockAxios from 'axios-mock-adapter';
import http from 'HTTP';
import {ACTION_TYPES} from 'CONSTANT';
import reduder,{ getCalendar } from './actions';
import { getMockStore } from 'helper';

const mockStore = getMockStore();
describe('calendar actions', () => {
  let mock = null;
  beforeEach(()=>{
    mock = new mockAxios(http);//mockAxios可以接收axios或axios实例,用实例的话对应的请求也要用实例
  });

  afterEach(()=>{
    mock.restore();
  });

  test('action getCalendar should fetch calendar successfully', (done) => {
    mock.onGet('/api/calendar').reply(200, {
      calendar: '2015-10-20'
    })

    const store = mockStore({});
    store.dispatch(getCalendar()).then(()=>{
      const actions = store.getActions();
      const action = actions[1];
      expect(action.type).toEqual('SET_CALENDAR_FULFILLED');
      expect(action.payload.data).toEqual({calendar: '2015-10-20'});
      done();
    })
  });

  test('calendar reducer should update successfully', () => {
    const result = reduder({}, {
      type: `${ACTION_TYPES.CALENDAR.SET_CALENDAR}_FULFILLED`,
      payload: {data: {calendar: '2015-10-20'}}
    })
    expect(result.calendar.format('YYYY-MM-DD')).toEqual('2015-10-20');
  });

});
