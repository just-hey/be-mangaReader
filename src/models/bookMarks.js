const db = require('../../db/knex')

const getAllBookMarks = () => {
  return db('currentreads')
}

const getUserBookMarks = (id) => {
  return db('currentreads')
    .where({user_id: id})
}

const addUserBookMark = (body) => {
  console.log(body)
  return db('currentreads')
    .insert(body, '*')
}

module.exports = { getAllBookMarks, getUserBookMarks, addUserBookMark }


// "user_id": body.user_id,
//     "manga_title": body.manga_title,
//     "manga_title_key": body.manga_title_key,
//     "chapter_name": body.chapter_name,
//     "chapter_number": body.chapter_number,
//     "last_viewed_page": body.last_viewed_page,
//     "last_viewed_page_number": body.last_viewed_page_number
