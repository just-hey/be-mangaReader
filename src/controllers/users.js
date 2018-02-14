const model = require('../models/users')
const bcrypt = require('bcryptjs')
const Token = require('../models/token');

const getAll = (req, res, next) => {
  model.getAll()
    .then(users => {
      res.status(200).json({ users })
    })
}

const login = (req, res, next) => {
  //this needs an email and password with no token. it then returns a token.
  let { email, password } = req.body
  if(!email) throw new Error('missingEmail')
  if(!password) throw new Error('missingPassword')
  //check if user is in db.
  model.getUserForVerification(email)
    .then(user => {
      console.log(user)
      if (!user) throw new Error('noSuchUser')
      // check if password matches stored
      if(!bcrypt.compareSync(password, user.hashed_password)) throw new Error('invalidPassword')
      // sign token with user id
      return Token.sign(user.id)
    })
    //return token to client
    .then(token => res.status(201).json({ response: token }))
    .catch(next)
}

const createUser = (req, res, next) => {
  let { username, email, password } = req.body
  model.createUser(username, email, password)
    .then(user => {
      res.status(201).json(user)
    })
}

const updateUser = (req, res, next) => {
  let response = model.updateUser(req.params.email)
  res.status(200).json(response)
}

const deleteUser = (req, res, next) => {
  let response = model.deleteUser(req.params.email)
  res.status(200).json(response)
}

module.exports = { getAll, login, createUser, updateUser, deleteUser }
