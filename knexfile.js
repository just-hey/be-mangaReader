// Update with your config settings.
const path = require('path')
require('dotenv').load()

module.exports = {

  development: {
    client: 'pg',
    connection: `postgres://localhost:5432/${process.env.DATABASE_NAME}`,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  }
}
