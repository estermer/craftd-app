var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

var BeerSchema = new Schema({
  name: String,
  img: String,
  comment: String,
  rating: Number
});

BeerSchema.plugin(passportLocalMongoose);
var BeerModel = mongoose.model('Beer', BeerSchema);

module.exports = {
  schema: BeerSchema,
  model: BeerModel
};
