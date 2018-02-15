const model = require('../models/bookMarks')

const getUserBookMarks = (req, res, next) => {
  model.getUserBookMarks(req.params.id)
    .then(response => {
      res.status(200).json(response)
    })
}

module.exports = { getUserBookMarks }
