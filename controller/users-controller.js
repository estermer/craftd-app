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
router.post('/register', function(req, res){
  console.log("USER REGISTRATION INFORMATION >>>>>", req.body.username);
  User.register(new User({
    username: req.body.username
  }),
  req.body.password,
  function(err, user){
    console.log("AFTER REGISTRATION USER >>>>>>>>", user);
    req.login(user, function(err){
      if (err) {console.log(err); }
      return res.json(user);
    });
  });
});

//LOGIN
//=========================================
router.get('/login', passport.authenticate('local'), function(req, res){
  console.log("USER LOGGED IN >>>>>>>>>", req.user.username);
  res.json({user: req.user});
});

//LOGOUT
//=========================================
router.delete('/logout', function(req, res){
  res.logout();
  console.log("USER LOGGED OUT >>>>>>>>>>");
  res.json({message: "Logged Out!"});
});


module.exports = router;
