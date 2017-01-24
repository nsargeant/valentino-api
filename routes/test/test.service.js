const Service = require('../../common/service'),
  repository = require('./test.repository');
  model = repository.model;

class TestService extends Service {
  constructor(options) {
    super(options);
  }
  mapOne (test = {}) {
    return test;
  }
}

module.exports = service = new TestService({ repository, model });