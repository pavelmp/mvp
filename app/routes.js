// app/routes.js

// grab the nerd model we just created
var User = require('./models/user');
var Spot = require('./models/spot');
var userSpot = require('./models/user_spot');

module.exports = function(app) {
  app.get('/api/user', function(req, res) {
    // use mongoose to get all nerds in the database
    User.find(function(err, users) {
        if (err) {
            res.send(err);
        }
        res.json(users); // return all nerds in JSON format
    });
  });

  app.get('/api/spots', function(req, res) {
    // use mongoose to get all spots in the database
    Spot.find(function(err, spots) {
        if (err) {
            res.send(err);
        }
        res.json(spots); // return all spots in JSON format
    });
  });


    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};
