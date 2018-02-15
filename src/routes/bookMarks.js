const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/bookMarks')

router.get('/', ctrl.getAllBookMarks)

router.get('/:id', ctrl.getUserBookMarks)

router.post('/', ctrl.addUserBookMark)

module.exports = router
