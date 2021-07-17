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


/* GET create survey page. */
router.get('/add', function(req, res, next) {
    res.render('partials/create-survey', { title: 'Create a Survey' });
  });


router.post('/add', function(req, res, next) {
    
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
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the contactlist
            res.redirect('/list');
        }
    });

});

//edit the survey
router.get('/edit/:id', function(req, res){

   // res.send('Edit Page');

    let id = req.params.id;

    Survey.findById(id, (err, surveyToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            //show the edit view
            res.render('partials/edit-survey', 
            {title: 'Edit Survey', 
            survey: surveyToEdit, 
        })
        }
    });

});


//update the survey 
router.post('/edit/:id', function(req, res){

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
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the contact list
            res.redirect('/list');
        }
    });
 
 });


//delete the survey
router.get('/delete/:id', function(req, res){

    let id = req.params.id;

    Survey.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the survey list
            res.redirect('/list');
        }

    });

});



module.exports = router;