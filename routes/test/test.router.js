const router = require('express').Router(),
  service = require('./test.service');

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