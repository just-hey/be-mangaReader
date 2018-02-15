const model = require('../models/chapters')

const getChapters = (req, res, next) => {
  console.log(req.params.id)
  model.getChapters(req.params.id)
    .then(response => {
      console.log('we make it out?',response)
      res.status(200).json(response)
    })
}

module.exports = { getChapters }
