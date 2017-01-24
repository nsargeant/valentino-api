const Service = require('../../common/service'),
  repository = require('./user.repository');
  model = repository.model;

class UserService extends Service {
  constructor(options) {
    super(options);
  }
  mapOne (user = {}) {
    return user;
  }
}

module.exports = service = new UserService({ repository, model });