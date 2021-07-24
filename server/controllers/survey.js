//require modules for the controller
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to the model
let Survey = require('../models/survey');

/* GET open surveys page. */
module.exports.displayOpenSurveys = (req, res, next) => {
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
            displayName: req.user ? req.user.displayName : ''
        });
        }
    });
}

/* GET create survey page. */
module.exports.displayAddSurveyPage = (req, res, next) => {
    res.render('partials/create-survey', { 
        title: 'Create a Survey',
        displayName: req.user ? req.user.displayName : ''
     });
}

/* POST create survey page */
module.exports.processAddSurvey = (req, res, next) => {
    
    let newSurvey = Survey({
        "name": req.body.name,
        "date":req.body.date,
        "q1": req.body.q1,
        "q2":req.body.q2,
        "q3":req.body.q3,
        "q4":req.body.q4,
    });

    Survey.create(newSurvey, (err, Survey) =>{
        if(err)
        {
            return console.log(err);
            // res.end(err);
        }
        else
        {
            //refresh the survey list
            res.redirect('/list');
        }
    });
}

/* GET edit survey page */
module.exports.displayEditSurveyPage = (req, res, next) => {

    // res.send('Edit Page');
 
     let id = req.params.id;
 
     Survey.findById(id, (err, surveyToEdit) => {
        if(err)
        {
            return  console.log(err);
            // res.end(err);
        }
         else{
            //show the edit view
            res.render('partials/edit-survey', 
            {
                title: 'Edit Survey', 
                survey: surveyToEdit,
                displayName: req.user ? req.user.displayName : ''
            })
        }
    });
}

/* POST edit survey page */
module.exports.processEditSurvey = (req, res, next) => {

    let id = req.params.id;
    
    let updatedSurvey = Survey({
        "_id": id,
        "name": req.body.name,
        "date":req.body.date,
        "q1": req.body.q1,
        "q2": req.body.q2,
        "q3":req.body.q3,
        "q4":req.body.q4,
    });

    Survey.updateOne({_id: id}, updatedSurvey, (err) => {
        if(err)
        {
            return console.log(err);
            // res.end(err);
        }
        else
        {
            //refresh the contact list
            res.redirect('/list');
        }
    });
}

/* POST Delete Survey */
module.exports.deleteSurvey = (req, res, next) => {

    let id = req.params.id;

    Survey.remove({_id: id}, (err) => {
        if(err)
        {
            return console.log(err);
        }
        else
        {
            //refresh the survey list
            res.redirect('/list');
        }

    });
}