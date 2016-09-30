var express = require('express');
var router = express.Router();

router.get('/todo', function(req, res) {
  res.send('hello world');
});

module.exports = router;