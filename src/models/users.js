const db = require('../../db/knex')
const bcrypt = require('bcryptjs')

class UserModel {

  static getAll () {
    return db('users')
  }

  static getUserForVerification (email) {
    return db('users')
      .where({ email })
      .first()
  }

  static createUser (username, email, password) {
    const hashed_password = bcrypt.hashSync(password)
    return db('users')
    .insert({ username, email, hashed_password })
    .returning(['id'])
  }
}

module.exports = UserModel
