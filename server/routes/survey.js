let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Survey = require('../models/survey');

// helper function for guard purposes
function requireAuth(req, res, next) {
    // check if the user is logged in
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

// create surveys controller reference
let surveyController = require('../controllers/survey');

/* GET open surveys page. */
router.get('/', requireAuth, surveyController.displayOpenSurveys);

/* GET create survey page. */
router.get('/add', requireAuth, surveyController.displayAddSurveyPage);

/* POST create survey page */
router.post('/add', requireAuth, surveyController.processAddSurvey);

//edit the survey
router.get('/edit/:id', requireAuth, surveyController.displayEditSurveyPage);

//update the survey 
router.post('/edit/:id', requireAuth, surveyController.processEditSurvey);

//take survey
router.get('/take', requireAuth, function(req, res, next) {
    res.render('partials/take-survey', { title: 'Take a Survey' });
});

//delete the survey
router.get('/delete/:id', requireAuth, surveyController.deleteSurvey);

module.exports = router;