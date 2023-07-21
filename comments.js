// Create web server
// Run: node comments.js
// Open browser: http://localhost:3000

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

var COMMENTS_FILE = __dirname + '/comments.json';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Enable CORS
app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});