const express = require('express');
const app = express();

// Can we use ES6 modules instead?

app.get('/', function(req, res) {
  res.send('Some dummy content');
})

app.listen(3000, function() {
  console.log('started application on http://localhost:3000');
});
