const model = require('../models/users')

const getByEmail = (req, res, next) => {
  let response = model.getByEmail(req.params.email)
  res.send(200).json(response)
}

const createUser = (req, res, next) => {
  let response = model.createUser(req.body)
  res.send(200).json(response)
}

const updateUser = (req, res, next) => {
  let response = model.updateUser(req.params.email)
  res.send(200).json(response)
}

const deleteUser = (req, res, next) => {
  let response = model.deleteUser(req.params.email)
  res.send(200).json(response)
}

module.exports = { getByEmail, createUser, updateUser, deleteUser }
