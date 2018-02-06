const model = require('../models/mangaTitles')

const getAll = (req, res, next) => {
  let response = model.getAll(req.query.limit)
  res.status(200).json(response)
}

const getByTitle = (req, res, next) => {
  let response = model.getByTitle(req.params.title)
  res.status(200).json(response)
}

// const getByGenre = (req, res, next) => {
//   let genres = req.body.genres
//   // console.log('ctrl', genres)
//   let response = model.getByGenre(genres)
//   res.status(200).json(response)
// }

module.exports = { getAll, getByTitle }
