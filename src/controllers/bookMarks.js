const model = require('../models/bookMarks')

const getUserBookMarks = (req, res, next) => {
  console.log(req.params.id)
  let response = model.getUserBookMarks(req.params.id)
  console.log('we make it out?',response)
  res.send(200).json(response)
}

module.exports = { getUserBookMarks }
