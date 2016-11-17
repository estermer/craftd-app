//ROUTER SETUP
//=========================================
var express = require('express');
var router = express.Router();
//=========================================

//EXTERNAL FILES
//=========================================
var User = require('../model/user.js');
var Beer = require('../model/beer.js');
//=========================================

//PASSPORT
//=========================================
var passport = require('passport');
var passportLocal = require('passport-local');
var LocalStrategy = passportLocal.Strategy;

router.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
router.use(passport.initialize());
router.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//=========================================


//REGISTER
//=========================================
router.post('/', function(req, res){
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
router.post('/login', passport.authenticate('local'), function(req, res){
  console.log("USER LOGGED IN >>>>>>>>>", req.user.username);
  res.json({user: req.user});
});

//LOGOUT
//=========================================
router.delete('/', function(req, res){
  req.logout();
  console.log("USER LOGGED OUT >>>>>>>>>>");
  res.json({message: "Logged Out!", user: req.user});
});


module.exports = router;
