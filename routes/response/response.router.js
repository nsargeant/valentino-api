const router = require('express').Router(),
  service = require('./response.service');

router.get('/', (req, res, next) => {
  const {params} = req;
  service.selectAll(params, (err, result) => {
    if(err) {
      throw err;
    }
    res.send(result);
  });
});

module.exports = router;