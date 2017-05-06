'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('pages/index', { title: 'SCHNIPO'});
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
