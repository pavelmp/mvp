// grab the mongoose module
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  displayName: String,
  profilePhoto: String
});

// define our nerd model
module.exports = mongoose.model('User', userSchema);