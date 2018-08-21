// const model = require('../models/mangaTitles')

// const getAll = (req, res, next) => {
//   let response = model.getAll(req.query.limit)
//   res.status(200).json(response)
// }

// const getByTitle = (req, res, next) => {
//   let response = model.getByTitle(req.params.title)
//   if (!response.length) {
//     next({status: 404, message: 'The Manga you\'re looking for is not here.'})
//   } else {
//     res.status(200).json(response)
//   }
// }

// const getByGenre = (req, res, next) => {
//   let genres = req.body.genres
//   let response = model.getByGenre(genres)
//   if(!response.length) {
//     next({status: 404, message: 'A Manga with such genres sounds super neat! ... but we don\'t have it.'})
//   } else {
//     res.status(200).json(response)
//   }
// }

// module.exports = { getAll, getByTitle, getByGenre }
