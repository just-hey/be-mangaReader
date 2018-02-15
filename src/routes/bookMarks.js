const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/bookMarks')

router.get('/:id', ctrl.getUserBookMarks)

module.exports = router
