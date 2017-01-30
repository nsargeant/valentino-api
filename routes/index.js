const user = require('./user/user.router'),
  test = require('./test/test.router'),
  response = require('./response/response.router');
module.exports = {
  user,
  test,
  response
};