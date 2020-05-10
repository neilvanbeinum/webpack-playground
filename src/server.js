const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Can we use ES6 modules instead?

app.get('/hello-world/', function(req, res) {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/hello-world.html')
  const content = fs.readFileSync(pathToHtmlFile, 'utf-8');

  res.send(content);
})

app.get('/dave/', function(req, res) {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/dave.html')
  const content = fs.readFileSync(pathToHtmlFile, 'utf-8');

  res.send(content);
})

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(3000, function() {
  console.log('started application on http://localhost:3000');
});
