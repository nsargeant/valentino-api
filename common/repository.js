module.exports = class Repository {
  constructor(model) {
    this.model = model;
  }

  selectAll({context, query = {} }, callback) {
    this.model.find(query, callback);
  }

  create({context, data}, callback) {
    const instance = new this.model(data);
    instance.save(callback);
  }
}