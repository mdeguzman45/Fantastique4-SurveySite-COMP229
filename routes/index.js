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

router.get('/create', function(req, res, next) {
  res.render('partials/create-survey', { title: 'Create a Survey' });
});

router.get('/list', function(req, res, next) {
  res.render('partials/open-survey', { title: 'Open Surveys' });
});

router.get('/edit', function(req, res, next) {
  res.render('partials/edit-survey', { title: 'Edit a Survey' });
});

router.get('/take', function(req, res, next) {
  res.render('partials/take-survey', { title: 'Take a Survey' });
});

module.exports = router;
