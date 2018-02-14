const model = require('../models/users')
const bcrypt = require('bcryptjs')

const login = (req, res, next) => {
  let { email, password } = req.body
  // console.log(email, password)
  //begin validations...
  let response = model.login(email, password)
  res.status(200).json(response)
}

const createUser = (req, res, next) => {
  let response = model.createUser(req.body)
  res.status(200).json(response)
}

const updateUser = (req, res, next) => {
  let response = model.updateUser(req.params.email)
  res.status(200).json(response)
}

const deleteUser = (req, res, next) => {
  let response = model.deleteUser(req.params.email)
  res.status(200).json(response)
}

module.exports = { login, createUser, updateUser, deleteUser }
