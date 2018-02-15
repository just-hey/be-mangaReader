const model = require('../models/bookMarks')

const getAllBookMarks = (req, res, next) => {
  model.getAllBookMarks()
    .then(response => {
      res.status(200).json(response)
    })
}

const getUserBookMarks = (req, res, next) => {
  model.getUserBookMarks(req.params.id)
    .then(response => {
      res.status(200).json(response)
    })
}

const addUserBookMark = (req, res, next) => {
  model.addUserBookMark(req.body)
    .then(response => {
      res.status(200).json(response)
    })
}

module.exports = { getUserBookMarks, addUserBookMark, getAllBookMarks }
