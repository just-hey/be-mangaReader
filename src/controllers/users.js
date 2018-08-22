const model = require('../models/users')
const bcrypt = require('bcryptjs')
const Token = require('../models/token');

const getAll = (req, res, next) => {
  model.getAll()
    .then(users => res.status(200).json({ users }))
} 

const login = (req, res, next) => {
  let { email, password } = req.body
  let id
  model.getUserByEmail(email)
    .then(user => {
      if (!user) throw new Error('noSuchUser')
      if(!bcrypt.compareSync(password, user.hashed_password)) throw new Error('invalidPassword')
      let resObj = {}
      resObj.id = user.id
      Token.sign(user.id)
        .then(tokenProm => {
          resObj.token = tokenProm
          return resObj
        })
        .then(token => res.status(201).set('Auth', `Bearer: ${token}`).json({ response: id, cart }))
        .catch(err => next(err))      
    })
}

// static login(req, res, next) {
//   const { phone, password } = req.body
//   let id
//   let cart
//   User.getUserIdByPhone(phone)
//     .then(user => {
//       if (!user) throw new Error('noSuchUser')
//       if (!bcrypt.compareSync(password, user.hashed_password)) throw new Error('noSuchUser')
//       id = user.id
//       return Cart.searchByUser(id)
//     })
//     .then(cartInfo =>{
//       cart = cartInfo
//       return Token.sign(id)
//     })
//     .then(token => res.status(201).set('Auth', `Bearer: ${token}`).json({ response: id, cart }))
//     .catch(err => next(err))
// }

const createUser = (req, res, next) => {
  model.checkIfAlreadyUsed(req.body)
    .then(() => model.createUser(req.body))
    .then(data => res.status(201).json({ data }))
    .catch(err => next(err))    
}

const deleteUser = (req, res, next) => {
  model.deleteUser(req.params.email)
    .then(data => res.status(200).json(data))
    .catch(err => next(err))
}

module.exports = { getAll, login, createUser, deleteUser }
