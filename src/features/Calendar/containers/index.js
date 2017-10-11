import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { setCalendar } from '../actions';

@connect(
  state => ({
    calendar: state.calendar.calendar
  }),
  dispatch => (bindActionCreators({setCalendar}, dispatch))
)
export default class Calendar extends Component{

  componentDidMount(){
    setTimeout(()=> {
      this.props.setCalendar(moment().add(1, 'day'));
    },1000)
  }

  render(){
    return (
      <div>
        <header>Calendar</header>
        <div>{this.props.calendar.format('YYYY-MM-DD')}</div>
      </div>
    )
  }
}