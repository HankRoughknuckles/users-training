const { Pool } = require('pg')

const pool = new Pool({
  user: 'users-training',
  host: 'localhost',
  database: 'users-training',
  password: '',
  port: 5432,
})

module.exports = {
  pool
}