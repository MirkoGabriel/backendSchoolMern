const { Router } = require('express');
const router = Router();

const {getPeriods, createPeriod, deletePeriod} = require('../controllers/periods.controller')

router.route('/')
    .get(getPeriods)
    .post(createPeriod)

router.route('/:id')
    .delete(deletePeriod)

module.exports = router