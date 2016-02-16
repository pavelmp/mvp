// grab the mongoose module
var mongoose = require('mongoose');

var userSpotSchema = new mongoose.Schema({
  userId: Number,
  spotId: Number,
  date: {type: Date, default: Date.now}
});

// define our nerd model
module.exports = mongoose.model('UserSpot', userSpotSchema);