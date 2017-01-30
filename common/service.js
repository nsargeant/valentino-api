const uuid = require('node-uuid');

class Service {
  constructor({ repository = null, model = null}) {
    this.repository = repository;
    this.model = model;
  }

  mapInput(data) {
    console.log('using default mapInput');
    return data;
  }

  mapOutput(data) {
    console.log('using default mapOutput');
    return data;
  }
  
  selectAll(options, callback) {
    // TODO options
    this.repository.selectAll(options, (err, results) => {
      callback(err, results.map((item) => (this.mapOutput(item)) ));
    });
  }

  // select(id, options, callback) {
  //   var self = this;
  //   var where = {},
  //     join = util.parseJoinFromQueryParam(options.expand, self.schema),
  //     orderBy = options.orderBy;

  //   var opts = {
  //     join: join,
  //     where: where,
  //     orderBy: orderBy
  //   };
  //   if (opts.join.length) {
  //     opts.alias = true;
  //   }

  //   this.repository.select(id, opts, function (err, result) {
  //     if (err) {
  //       return callback(err);
  //     }
  //     if (!result.rows.length) {
  //       var error = new Error('Could not find resource where \'id\'' /*+ self.schema.cols[0]*/ + '=' + id);
  //       error.name = 'NotFoundError';
  //       return callback(error);
  //     }
  //     callback(err, util.buildExpandedObject(self.schema, result.rows[0], join));
  //   });
  // }

  create({context, data}, callback) {
    const model = this.mapInput(data);
    model.id = uuid.v4();
    //TODO validate
    this.repository.create({ data: model }, (err, result) => {
      const mappedResult = this.mapOutput(result);
      callback(err, mappedResult);
    });
  }

  // update(context, id, reqBody, callback) {
  //   var self = this;

  //   var model = new this.model();
  //   model.assign(reqBody);
  //   model.id = id;
  //   model.verify(function (err) {
  //     if (err) {
  //       return callback(err, null);
  //     }
  //     self.repository.update(model, function (err, result) {
  //       callback(err, result.rowCount);
  //     });
  //   });
  // }

  // delete(id, callback) {
  //   this.repository.delete(id, function (error, result) {
  //     if (error) {
  //       return callback(error);
  //     }
  //     callback(null, result);
  //   });
  // }
}

module.exports = Service;