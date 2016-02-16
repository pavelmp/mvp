// grab the mongoose module
var mongoose = require('mongoose');

var spotSchema = new mongoose.Schema({
  spotName: String,
  type: String,
  imageUrl: String
});

// define our nerd model
module.exports = mongoose.model('Spot', spotSchema);