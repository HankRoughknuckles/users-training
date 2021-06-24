const express = require('express');

const app = express();

app.get('/users', (req, res) => {
  res.send('hi')
})

app.listen(7000, () =>
  console.log('Example app listening on port 7000!'),
);

