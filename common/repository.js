module.exports = class Repository {
  constructor(model) {
    this.model = model;
  }

  selectAll({ query = {} }, callback) {
    this.model.find(query, callback);
  }
}