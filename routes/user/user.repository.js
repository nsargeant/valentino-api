const mongoose = require('mongoose'),
  userSchema = require('./user.schema'),
  Repository = require('../../common/repository');

module.exports = new Repository(mongoose.model('User', userSchema));