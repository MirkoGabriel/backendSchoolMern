const { Router } = require('express');
const router = Router();

const {getGrades, createGrades, getGrade, updateGrade, deleteGrade,deleteGrades} = require('../controllers/grades.controller')

router.route('/')
    .get(getGrades)
    .post(createGrades)
    .delete(deleteGrades)

router.route('/:id')
    .get(getGrade)
    .put(updateGrade)

module.exports = router;