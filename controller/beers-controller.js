// do router requests and an api requests to brewery DB
//ROUTER SETUP
//=========================================
var express = require('express');
var router = express.Router();

//EXTERNAL FILES
//=========================================
var Beer = require('../model/beer.js').model;


//INDEX SEARCH BreweryDB API
//=========================================
// router.get('/', function(req, res){
//
// });

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
router.put('/:name', function(req, res){

});

//DESTROY
//=========================================
router.delete('/:name', function(req, res){

});

module.exports = router;
