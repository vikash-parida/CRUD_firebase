let express = require('express')

let router = express.Router();

let student = require('./student.controller')


router.post('/addStudent',student.addStudentData);
router.get('/getStudent',student.getStudentData);
router.get('/getStudent/:id',student.getStudentDataById);

module.exports = router;