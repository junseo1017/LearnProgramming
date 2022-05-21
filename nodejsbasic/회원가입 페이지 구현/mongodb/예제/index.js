const express = require('express');
const mongoose = require('mongoose');

const postsRouter = require('./routes/posts');

const app = express();

mongoose.connect('mongodb://localhost:27017/exam_7');

mongoose.connection.on('connected', () => {
  console.log('Successfully connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send('OK');
});

app.use('/posts', postsRouter);

app.listen(8080);
