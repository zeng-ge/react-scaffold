'use strict';

function getCalendar(req, res) {
  res.json({calendar: '2017-10-15'});
}

module.exports = {
  getCalendar: getCalendar
};
