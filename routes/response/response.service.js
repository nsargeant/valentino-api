const Service = require('../../common/service'),
  repository = require('./response.repository'),
  { model } = repository;

class ResponseService extends Service {
  //Mappers
  mapInput (response = {}) {
    return response;
  }
  
  mapOutput (response = {}) {
    return response;
  }
}

module.exports = service = new ResponseService({ repository, model });