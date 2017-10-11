import {FEATURES} from 'CONSTANT';
import App from '../features/App';
import Calendar from '../features/Calendar';
import List from '../features/List';

export default () => {
  return {
    [FEATURES.APP]: App,
    [FEATURES.CALENDAR]: Calendar,
    [FEATURES.LIST]: List
  }
}