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
    for (let genre of incomingGenres) {
      if (!manga.c.includes(genre)) {
        return false
      }
    }
    return true
  })
  return response
}


module.exports = { getAll, getByTitle, getByGenre }
