const express = require('express');

const router = express.Router();

router.get('/login', function(req, res, next) {
  res.render('login');
});
router.post('/login/password', (req, res) => {
  console.log(req.headers);
  res.redirect('/manager');
});

module.exports = router;