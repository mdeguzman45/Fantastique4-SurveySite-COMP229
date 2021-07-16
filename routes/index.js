var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


/* GET my survey page. */
router.get('/mysurvey', function(req, res, next) {
  res.render('index', { title: 'My Surveys' });
});


/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('partials/login', { title: 'Login' });
});

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('partials/sign-up', { title: 'Signup' });
});


module.exports = router;
