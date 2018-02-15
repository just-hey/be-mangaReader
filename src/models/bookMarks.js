const db = require('../../db/knex')

const getUserBookMarks = (id) => {
  return db('currentReads')
    .where( /* user_id === id*/)
    .first() //eh?
}

module.exports = { getUserBookMarks }
