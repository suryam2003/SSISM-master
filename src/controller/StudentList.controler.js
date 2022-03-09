const studentLists = require('../models/StudentList');

exports.studentListPost = async (req, res) => {
    //    console.log("placed API Student");
    try {
        console.log(res.body);
        const studentList = new studentLists(req.body);
        console.log(studentList);
        const result = await studentList.save();
        console.log(result);
        res.status(201).send(result);
    } catch (e) {
        res.status(400).send(e);
        console.log(e);
    }
};

exports.getStudentList = async (req, res) => {
    console.log("Student List GET API...");
    const getStudentList = await studentLists.find();
    console.log(getStudentList);
    // res.status(200).send(getStudentList);
    res.status(200).json({
        data: getStudentList,
        message: "list data"
    })
};