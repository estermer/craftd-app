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

//Middleware
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


///SERVER API///
app.get('/', function(req, res) {
    res.json({ status: 200 });
});

///REGISTER///
app.post('/register', function(req, res){
  //User.create
});

///LOGIN///
app.get('/login', passport.authenticate('local'), function(req, res){
  res.json({user: req.user});
});

///LOGOUT///
app.delete('/logout', function(req, res){
  res.lgout();
  res.json({message: "Logged Out!"});
});

///*********///

app.listen(process.env.PORT || 3000, function(){
  console.log('=============================');
  console.log('SERVER CONNECTED TO PORT 3000');
  console.log('=============================');
});
