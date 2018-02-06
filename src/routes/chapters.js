const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/chapters')

router.get('/:id', ctrl.getChapter)

module.exports = router
