class Service {
  constructor({ repository = null, model = null, schema = null }) {
    this.repository = repository;
    this.model = model;
    this.schema = schema;
  }

  mapOne(data) {
    return data
  }
  
  mapAll(data) {
    return mapOne(data)
  }
  
  selectAll(options, callback) {
    // TODO options
    this.repository.selectAll(options, (err, results) => {
      callback(err, results.map(this.mapAll));
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

  // create(context, reqBody, callback) {
  //   var self = this;

  //   var model = new this.model();
  //   model.assign(reqBody);
  //   model.verify(function (err) {
  //     if (err) {
  //       return callback(err, null);
  //     }
  //     model.createNewId();
  //     self.repository.create(model, function (err, result) {
  //       callback(err, result ? model : null);
  //     });
  //   });
  // }

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