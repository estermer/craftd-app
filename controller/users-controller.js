//ROUTER SETUP
//=========================================
var express = require('express');
var router = express.Router();

//EXTERNAL FILES
//=========================================
var User = require('../model/user.js');
var Beer = require('../model/beer.js');


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
