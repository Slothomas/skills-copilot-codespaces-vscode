// CREATE WEB SERVER

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const comments = require('./comments');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});