/*************************************************/
//Created By Eric Stermer - General Assembly WDIR//
/*************************************************/

///MODULES///
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var passport = require('passport');
var passportLocal = require('passport-local');
var pry = require('pry');
var pryjs = require('pryjs');
var methodOverride = require('method-override');
///********///


///EXTERNAL FILES///
var UsersController = require('./controller/users-controller.js');
var BeersController = require('./controller/beers-controller.js');
///**************///


///MONGOOSE///
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/milelogger';
mongoose.connect(mongoURI);
mongoose.Promise = global.Promise;
///********///


///EXPRESS CONFIG///
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use( bodyParser.json() );    // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({  // to support URL-encoded bodies
  extended: true
}));
///***********///


///ENV variables///
// var dotenv = require('dotenv');
// dotenv.load();
///************///


///PASSPORT CONFIGURATION///
var LocalStrategy = require('passport-local').Strategy;

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
///*****************///


///MIDDLEWARE ROUTING///
app.use("/users", UsersController);
app.use("/beers", BeersController);
///*****************///


///SERVER API///
app.get('/', function(req, res) {
    res.json({ status: 200 });
});

app.listen(process.env.PORT || 3000, function(){
  console.log('=============================');
  console.log('SERVER CONNECTED TO PORT 3000');
  console.log('=============================');
});
///*********///
