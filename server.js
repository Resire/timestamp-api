"use strict"

var express = require('express');
var ts = require("./services/timestamp.js");

var app = express();

app.get('/', function (req, res) {
  res.send('Timestamp Microservice')
})

app.get('/:time', (req, res) => {
  let json = ts(req.params.time);
  res.json(json);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
});