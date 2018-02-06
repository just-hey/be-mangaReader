const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/mangaTitles')


router.get('/', ctrl.getAll)

router.get('/:title', ctrl.getByTitle)

// router.post('/', ctrl.getByGenre)


module.exports = router
