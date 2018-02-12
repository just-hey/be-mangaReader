const fs = require('fs')
const format = 'utf8'
const dbPath = __dirname + '/../db/massive.json'

const massiveContents = fs.readFileSync(dbPath, format)
const db = JSON.parse(massiveContents)

const getAll = (limit) => {
  return limit ? db.slice(0, limit) : db
}

const getByTitle = (title) => {
  let response = db.filter(manga => {
    if(!manga.a.includes(title.toLowerCase())) return false
    return true
  })
  return response
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
