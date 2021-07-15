var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET create survey page. */
router.get('/create', function(req, res, next) {
  res.render('index', { title: 'Create a Survey' });
});

/* GET my survey page. */
router.get('/mysurvey', function(req, res, next) {
  res.render('index', { title: 'My Surveys' });
});

/* GET open surveys page. */
router.get('/open', function(req, res, next) {
  res.render('index', { title: 'Open Surveys' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login' });
});



module.exports = router;
