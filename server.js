"use strict"

var express = require('express');
var ts = require("./services/timestamp.js");

var app = express();

app.get('/', function (req, res) {
  let template = `
    <h1>Timestamp Microservice</h1>
    <p>User stories:</p>
    <ol>
      <li>I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)</li>
      <li>If it does, it returns both the Unix timestamp and the natural language form of that date.</li>
      <li>If it does not contain a date or Unix timestamp, it returns null for those properties.</li>
    </ol>
    <h2>Example usage:</h2>
    <p>https://timestamp-resire.herokuapp.com/December%2015,%202015</p>
    <p>https://timestamp-resire.herokuapp.com/1450137600</p>
    <h2>Example output:</h2>
    <p>{ "unix": 1450137600, "natural": "December 15, 2015" }</p>
  `;
  
  res.send(template);
});

app.get('/:time', (req, res) => {
  let json = ts(req.params.time);
  res.json(json);
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT )
});