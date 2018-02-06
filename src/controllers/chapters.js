const model = require('../models/chapters')

const getChapter = (req, res, next) => {
  console.log(req.params.id);
  let response = model.getChapter(req.params.id)
  res.send(200).json(response)
}

module.exports = { getChapter }
