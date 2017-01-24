//Test Schema
const Schema = require('mongoose').Schema;

module.exports = Schema({
  id: String,
  questions: {
    'type': Array,
    'default': []
  }
});