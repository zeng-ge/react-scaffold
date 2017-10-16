'use strict';

function getCalendar(req, res) {
  res.json({calendar: '2017-10-20'});
}

module.exports = {
  getCalendar: getCalendar
};
