const express = require('express');
const Router = express.Router();


const trainner = require('../controller/trainner.controller');
const AlertJob = require('../controller/AlertJob.controller');
const company = require('../controller/company.controller');
const trainning = require('../controller/trainning.controller');
const PlacedSTD = require('../controller/PlacedSTD.controller');
const provideJob = require('../controller/provideJob.controller');


//Suryam
const StudentList = require('../controller/StudentList.controler');
const InterviewRequest = require('../controller/InterviewRequest.controller');




// require('./trainning.routes')(Router);

Router.get('/', async (req, res) => {
    res.send('ok server is working')

});


Router.post('/posttrainning', trainning.postTrainning);
Router.get('/gettrainning', trainning.getTrainning);


Router.post('/posttrainner', trainner.postTrainner);
Router.get('/gettrainner', trainner.getTranner);



Router.post('/postCompany', company.postCompanyVisit);
Router.get('/getCompany', company.getCompanyVisit);



Router.post('/postPlacedSTD', PlacedSTD.postPlacedSTD);
Router.get('/getPlacedSTD', PlacedSTD.getPlacedSTD);



Router.post('/postAlertJob', AlertJob.postAlertJob);
Router.get('/getAlertJob', AlertJob.getAlertJob);


Router.post('/postProvideJob', provideJob.providejobPost);
Router.get('/getProvideJob', provideJob.getProvidejob);


// Suryam

// Student List API's
Router.post('/postStudentList', StudentList.studentListPost);
Router.get('/getStudentList', StudentList.getStudentList);
// https://itegserver.herokuapp.com/getStudentList  GET API for Student List

    // "studentName": "Shivani Joshi",
    // "skills": "NodeJS SQL",
    // "catagoury": "Backend Developer",
    // "progress": "100%",
    // "status": "Completed"


// InterviewRequest API's
Router.post('/postInterviewRequest', InterviewRequest.interviewRequestPost);
Router.get('/getInterviewRequest', InterviewRequest.getInterviewrequest);


// `   "intvName":"Yogendra Rajput",
//     "intvEmail":"yogendrarajput@ssism.org",
//     "meetLink":"https://meet.google.com/eoc-agsr-xqa",
//     "compName":"Think AI",
//     "date":"10/03/2022",
//     "time":"12:00 pm",
//     "invitedStudent":"Shubham Vishwakarma",
//     "sortMsg":"I am inviting you for an internship."



module.exports = Router;