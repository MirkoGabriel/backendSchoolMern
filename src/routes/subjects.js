const { Router } = require('express');
const router = Router();

const {getSubjects, createSubjects, getSubject, updateSubject, deleteSubject} = require('../controllers/subjects.controllers')

router.route('/')
    .get(getSubjects)
    .post(createSubjects)

router.route('/:id')
    .get(getSubject)
    .put(updateSubject)
    .delete(deleteSubject)

module.exports = router