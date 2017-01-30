const mongoose = require('mongoose'),
  responseSchema = require('./response.schema'),
  Repository = require('../../common/repository');

module.exports = new Repository(mongoose.model('Response', responseSchema));