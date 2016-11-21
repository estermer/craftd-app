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
var pry = require('pry');
var pryjs = require('pryjs');
var methodOverride = require('method-override');
///********///


///EXTERNAL FILES///
var BeersController = require('./controller/beers-controller.js');
var User = require('./model/user.js');
///**************///


///MONGOOSE///
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/craftd';
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


//PASSPORT
//=========================================
var passport = require('passport');
var passportLocal = require('passport-local');
var LocalStrategy = passportLocal.Strategy;

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
//=========================================


///MIDDLEWARE ROUTING///
app.use("/beers", BeersController);
///*****************///


///SERVER API///
app.get('/', function(req, res) {
    res.json({ status: 200 });
});

//REGISTER
//=========================================
app.post('/', function(req, res){
  console.log("USER REGISTRATION INFORMATION >>>>>", req.body);
  User.register(new User({
    username: req.body.username
  }),
  req.body.password,
  function(err, user){
    if (err) console.log(err);
    console.log("AFTER REGISTRATION USER >>>>>>>>", user);
    req.login(user, function(err){
      if (err) {console.log(err); }
      return res.json({user: user});
    });
  });
});

//LOGIN
//=========================================
app.post('/login', passport.authenticate('local'), function(req, res){
  console.log("USER LOGGED IN >>>>>>>>>", req.user);
  res.json({user: req.user});
});

//LOGOUT
//=========================================
app.delete('/', function(req, res){
  console.log("USER LOGGED OUT >>>>>>>>>>", req.user);
  req.logout();
  res.json({message: "Logged Out!", user: req.user});
});

app.all('/*', function(req, res, next) {
  res.sendFile('/public/index.html', { root: __dirname });
});

app.listen(process.env.PORT || 3000, function(){
  console.log('=============================');
  console.log('SERVER CONNECTED TO PORT 3000');
  console.log('=============================');
});
///*********///
