'use strict';
var util = require('util');
module.exports = {
  hello: hello
};

function hello(req, res) {

  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
}
