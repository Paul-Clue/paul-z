var express = require('express');

var router = express.Router();

router.get('/login', function(req, res, next) {
  res.render('login');
});
router.post('/login/password', (req, res) => {
  console.log(req.headers);
  res.render('login');
});

module.exports = router;