const fs = require('fs')
const format = 'utf8'
const dbPath = __dirname + '/../db/massive.json'

const massiveContents = fs.readFileSync(dbPath, format)
const db = JSON.parse(massiveContents)

const getAll = (limit) => {
  return limit ? db.slice(0, limit) : db
}

const getByTitle = (title) => {
  return db.find(manga => manga.a == title)
}

// const getByGenre = (genres) => {
//   let response = []
//   db.slice(0,5).forEach(manga => {
//     if (manga.c.every(genreCheck(current, manga.c))) {
//        response.push(manga)
//     }
//   })
//   return response
// }
//
// const genreCheck = (currentTag, mangaGenres) => {
//   let result = []
//   if (mangaGenres.includes(currentTag)) result.push(true)
//   else result.push(false)
//   if result.includes(false) return false
// }

module.exports = { getAll, getByTitle }
