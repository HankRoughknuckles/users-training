const express = require('express');
const bodyParser = require('body-parser');
const { pool } = require('./pool');
const cors = require('cors')

const app = express();
const corsOptions = {
  origin:'http://localhost:3000',
  credentials:true,
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

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
  const {firstName, lastName, jobTitle, age} = req.body;

  await pool.query(`
      INSERT INTO users ("firstName", "lastName", "jobTitle", "age")
      VALUES ('${firstName}', '${lastName}', '${jobTitle}', '${age}')
  `)

  const user = await pool.query(`
    SELECT * FROM users WHERE "firstName" = '${firstName}' AND "lastName" = '${lastName}' LIMIT 1
  `)

  res.send(user.rows[0])
})

app.delete('/user/:userId', async (req, res) => {
  const { userId } = req.params;
  await pool.query(`DELETE FROM users WHERE id = ${userId}`)

  res.send({ status: 'ok' });
})

app.listen(7000, () =>
  console.log('Example app listening on port 7000!'),
);
