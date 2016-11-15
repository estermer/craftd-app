// do router requests and an api requests to brewery DB
//ROUTER SETUP
//=========================================
var express = require('express');
var router = express.Router();

//EXTERNAL FILES
//=========================================
var Beer = require('../model/beer.js').model;
var dotenv = require('dotenv');
dotenv.load();


// ENV response to send api key and id to front end
// =========================================
router.get('/env', function(req, res){
  res.json({key: process.env.API_KEY});
});

//CREATE
//=========================================
router.post('/', function(req, res){
  beer = Beer.create({
    name: req.body.name,
    img: req.body.img,
    comment: req.body.comment,
    rating: req.body.rating
  });

  req.user.beers.push(beer);

  res.json({status: 200, user: req.user});
});

//UPDATE
//=========================================
router.put('/:id', function(req, res){]
  User.findOne({
    username: req.user.username
  }, function(err, user){
    for(var i = 0; i < req.user.beers.length; i++){
      if(user.beers[i]["id"] == req.params.id){
        user.beers[i] = req.body.beer;
      }
    }

    user.save(function(err){
      if(err) console.log(err);
      console.log("Edited Item Saved to User!!!");
    });

    res.json({status: 200, user: req.user});
  });
});

//DESTROY
//=========================================
router.delete('/:id', function(req, res){
  User.findOne({
    username: req.user.username
  }, function(err, user){
    for(var i = 0; i < req.user.beers.length; i++){
      if(user.beers[i]["id"] == req.params.id){
        user.beers.splice(i, 1);
      }
    }

    user.save(function(err){
      if(err) console.log(err);
      console.log("Edited Item Saved to User!!!");
    });

    res.json({status: 200, user: req.user});
  });
});

module.exports = router;
