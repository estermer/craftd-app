var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;
var BeerSchema = require('./beer.js').schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  beers: [BeerSchema]
});

UserSchema.plugin(passportLocalMongoose);
var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
