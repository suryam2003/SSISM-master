const interviewRequest = require('../models/InterviewRequest');

exports.interviewRequestPost = async (req, res) => {
    //    console.log("placed API Student");
    try {
        console.log(res.body);
        const interviewRequest = new interviewRequest(req.body);
        console.log(interviewRequest);
        const result = await interviewRequest.save();
        console.log(result);
        res.status(201).send(result);
    } catch (e) {
        res.status(400).send(e);
        console.log(e);
    }
};

exports.getInterviewrequest = async (req, res) => {
    console.log("Interview Request GET API...");
    const getInterviewRequest = await interviewRequest.find();
    console.log(getInterviewRequest);
    res.status(200).send(getInterviewRequest);
};