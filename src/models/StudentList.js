const mongoose = require("mongoose");

const StudentListSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true,
    },
    skills: {
        type: String,
        required: true,
        trim: true
    },
    catagoury: {
        type: String,
        required: true,
    },
    progress: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },

})

const StudentList=new mongoose.model("StudentList-T&P",StudentListSchema);
module.exports=StudentList;