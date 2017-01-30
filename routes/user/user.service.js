const Service = require('../../common/service'),
  repository = require('./user.repository'),
  { model } = repository;

class UserService extends Service {
  mapInput (user = {}) {
    const {id, ['first-name'] : firstName, ['last-name'] : lastName} = user;
    return {
      id,
      firstName,
      lastName
    };
  }

  mapOutput ({id, firstName, lastName}) {
    return {
      id,
      firstName,
      lastName
    };
  }
}

module.exports = service = new UserService({ repository, model });