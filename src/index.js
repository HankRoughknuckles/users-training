const express = require('express');
const bodyParser = require('body-parser');
const { pool } = require('./pool');

const app = express();
app.use(bodyParser.json())

app.get('/users', async (req, res) => {
  const users = await pool.query('SELECT * FROM users')
  res.send(users.rows)
})

app.patch('/user/:userId', async (req, res) => {
  const {userId} = req.params
  const {userName, eyeColor, height} = req.body;

  await pool.query(`
      UPDATE users
      SET "userName" = '${userName}',
          "eyeColor" = '${eyeColor}',
          "height" = ${height}
      WHERE id = ${userId}
  `)

  const user = await pool.query(`
    SELECT * FROM users WHERE id = ${userId}
  `)

  res.send(user.rows[0])
})

app.post('/user', async (req, res) => {
  const {userName, eyeColor, height} = req.body;

  await pool.query(`
      INSERT INTO users ("userName", "eyeColor", "height")
      VALUES ('${userName}', '${eyeColor}', ${height})
  `)

  const user = await pool.query(`
    SELECT * FROM users WHERE "userName" = "${userName}"
  `)

  res.send(user.rows[0])
})

app.listen(7000, () =>
  console.log('Example app listening on port 7000!'),
);