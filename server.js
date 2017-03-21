"use strict"

const express = require('express');
const ts = require("./services/timestamp.js");

const app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/:time', (req, res) => {
  let json = ts(req.params.time);
  res.json(json);
});

app.listen(process.env.PORT, function () {
  console.log('App listening on port ' + process.env.PORT )
});