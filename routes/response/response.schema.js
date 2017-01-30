//Response Schema
const Schema = require('mongoose').Schema;

module.exports = Schema({
  id: String,
  user: String,
  test: String,
  date: Date,
  answers: {
    'type': Array,
    'default': []
  }
});