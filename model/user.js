var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;
var BeerSchema = require('./beer.js').schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  beers: [BeerSchema]
});

UserSchema.plugin(passportLocalMongoose);
var UserModel = mongoose.model(UserSchema);

module.exports = UserModel;
