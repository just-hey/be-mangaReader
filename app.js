const express = require('express')
const cors = require('cors')
const app = express()
const morgan = require('morgan') 
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

const titleRoutes = require('./src/routes/mangaTitles')
const bookMarkRoutes = require('./src/routes/bookMarks')
const chapterRoutes = require('./src/routes/chapters')
const usersRoutes = require('./src/routes/users')

const processErrorMessages = require('./src/models/errors')

app.use(cors())
app.disable('x-powered-by')
app.use(morgan('dev'))
app.use(bodyParser.json())


app.use('/titles', titleRoutes)
app.use('/bookMarks', bookMarkRoutes)
app.use('/chapters', chapterRoutes)
app.use('/users', usersRoutes)


app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' } })
})

app.listen(port, () => console.log(`On port: ${port}`))

module.exports = app
