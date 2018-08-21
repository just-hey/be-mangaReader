const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/users')


router.get('/', ctrl.getAll)

router.post('/login', ctrl.login)

router.post('/signup', ctrl.createUser)

// router.patch('/:email', ctrl.updateUser)

router.delete('/:email', ctrl.deleteUser)
 

module.exports = router
