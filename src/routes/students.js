const { Router } = require('express');
const router = Router();

const {getStudents, createStudents, getStudent, updateStudent, deleteStudent} = require('../controllers/students.controller')

router.route('/')
    .get(getStudents)
    .post(createStudents)

router.route('/:id')
    .get(getStudent)
    .put(updateStudent)
    .delete(deleteStudent)

module.exports = router;