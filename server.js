///MODULES///
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var passport = require('passport');
var passportLocal = require('passport-local');
var passportFacebook = require('passport-facebook');
var pry = require('pry');
var pryjs = require('pryjs');
var methodOverride = require('method-override');
var hbs = require('hbs');

app.get('/', function(req, res){
  res.json({status: 200, message: "connected!"});
});

app.listen(process.env.PORT || 3000, function(){
  console.log('=============================');
  console.log('SERVER CONNECTED TO PORT 3000');
  console.log('=============================');
});
