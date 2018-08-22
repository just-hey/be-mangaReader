const db = require('../../db/knex')
const bcrypt = require('bcryptjs')

function getAll () {
  return db('users')
}

function createUser ({ username, email, password }) {
  if(!username) throw new Error('missingUsername')    
  if(!email) throw new Error('missingEmail')  
  if(!password) throw new Error('missingPassword')  
  const hashed_password = bcrypt.hashSync(password)
  return db('users')
    .insert({ username, email, hashed_password })
    .returning(['id', 'username', 'email'])
    .then(([user]) => user)
}

function getUserByEmail(email) { 
  if(!email) throw new Error('missingEmail')
  return db('users')
    .where({ email })
    .first()
}

function getUserByUsername(username) {
  if(!username) throw new Error('missingUsername')
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
      return null
    })
}

module.exports = { getAll, createUser, getUserByEmail, getUserByUsername, checkIfAlreadyUsed }
