const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

//require in routes for things here-ish...

app.diable('x-powered-by')
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

//app.use routes pulled in...

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' } })
})

app.listen(port, () => console.log(`On port: ${port}`))

module.exports = app
