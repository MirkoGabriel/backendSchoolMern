const { Router } = require('express');
const router = Router();

const {getGroups, createGroups, deleteGroup} = require('../controllers/groups.controller')

router.route('/')
    .get(getGroups)
    .post(createGroups)

router.route('/:id')
    .delete(deleteGroup)

module.exports = router