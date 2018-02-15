const db = require('../../db/knex')

const getUserBookMarks = (id) => {
  return db('currentreads')
    .where({user_id: id})
}

module.exports = { getUserBookMarks }
