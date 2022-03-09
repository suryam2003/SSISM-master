const mongoose = require("mongoose");

const InterviewRequestSchema = new mongoose.Schema({
    intvName: {
        type: String,
        required: true
    },
    intvEmail: {
        type: String,
        required: true
    },
    meetLink: {
        type: String,
        required: true
    },
    compName: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    invitedStudent:{
        type:String,
        required:true
    },
    sortMsg:{
        type:String,
        required:true
    }

})
const InterviewRequest = new mongoose.model("interviewrequest-T&P", InterviewRequestSchema);
module.exports = InterviewRequest;