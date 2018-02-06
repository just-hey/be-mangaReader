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


const getByGenre = (incomingGenres) => {
  let response = db.filter(manga => {
    incomingGenres.forEach(genre => {
      if (!manga.c.includes(genre)) {
        return false
      }
    })
    return true
  })
  return response
}

// const genreCheck = (manga, genres) => {
//   let result = []
//   genres.forEach(genre => {
//     manga.c.includes(genre) ? result.push(true) : result.push(false)
//   })
//   return result.includes(false) ? true : false
// }

module.exports = { getAll, getByTitle, getByGenre }


// mangas.filter((manga) => {
//     for (let genre of genres) {
//         if (!manga.includes(genre) {
//             return true
//         } else {
//             return false
//         }
//     }
// })
