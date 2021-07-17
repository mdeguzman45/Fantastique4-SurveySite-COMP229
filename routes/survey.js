let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Survey = require('../models/survey');

/* GET open surveys page. */
router.get('/', function(req, res, next) {

    Survey.find((err, surveyList) => {
        if(err)
        {
                return console.error(err);
        }
        else
        {
            res.render('partials/open-survey', 
            {
            title: 'Open Surveys', 
            SurveyList: surveyList,
        });
        }
    });
   // res.render('partials/open-survey', { title: 'Open Surveys' });

});

module.exports = router;