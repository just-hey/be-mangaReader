const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/users')


router.get('/:email', ctrl.getByEmail)

router.post('/', ctrl.createUser)

router.patch('/:email', ctrl.updateUser)

router.delete('/:email', ctrl.deleteUser)


module.exports = router
