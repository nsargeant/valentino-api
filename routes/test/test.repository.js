const mongoose = require('mongoose'),
  testSchema = require('./test.schema'),
  Repository = require('../../common/repository');

module.exports = new Repository(mongoose.model('Test', testSchema));