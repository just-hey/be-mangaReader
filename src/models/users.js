const db = require('../../db/knex')
const bcrypt = require('bcryptjs')

function getAll () {
  return db('users')
}

function createUser ({ username, email, password }) {
  const hashed_password = bcrypt.hashSync(password)
  return db('users')
    .insert({ username, email, hashed_password })
    .returning(['id'])
    .then(([user]) => user)
}

function getUserByEmail(email) { 
  return db('users')
    .where({ email })
    .first()
}

function getUserByUsername(username) {
  return db('users')
    .where({ username })
    .first()
}

function checkIfAlreadyUsed({ email, username }) {
  return getUserByEmail(email)
    .then(user => {
      if (user !== undefined) throw new Error('duplicateEmail')
      return getUserByUsername(username)
    })
    .then(user => {
      if (user !== undefined) throw new Error('duplicateUsername')
      return true
    })
}

module.exports = { getAll, createUser, getUserByEmail, getUserByUsername, checkIfAlreadyUsed }
