const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/chapters')

router.get('/:id', ctrl.getChapters)

module.exports = router
