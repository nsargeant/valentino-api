const uuid = require('node-uuid'),
  Service = require('../../common/service'),
  repository = require('./test.repository'),
  { model } = repository;

class TestService extends Service {
  mapInput (test = {}) {
    const {id, ['test-name'] : name, questions} = test;

    return {
      id,
      uri: name.toLowerCase().replace(' ', '-'),
      name,
      questions: questions.map((text) => ({
        id: uuid.v4(),
        text
      }))
    };
  }

  mapOutput ({ id, name, questions }) {
    return {
      id,
      name,
      questions
    };
  }
}

module.exports = service = new TestService({ repository, model });