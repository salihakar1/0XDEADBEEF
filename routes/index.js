var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});

router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Express' });
});

router.get('/search', (req, res, next) => {
  const key = req.query.key;
  res.render('search', { key });
});

router.get('/posts/:uid', (req, res, next) => {
  res.render('post', {
    id: req.query.uid
  });
});
module.exports = router;
