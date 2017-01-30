//Test Schema
const Schema = require('mongoose').Schema;

module.exports = Schema({
  id: String,
  name: String,
  uri: String,
  questions: {
    'type': Array,
    'default': []
  }
});