'use strict';
let express = require('express');
let bodyParser = require('body-parser');

let app = express();

let jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })




app.post('/save', urlencodedParser, function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  console.log(req.body);
  res.send(req.body)
});

const PORT = 8000;

app.get('/', function(req, res) {
  res.end('')
})

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
});
