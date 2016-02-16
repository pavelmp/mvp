var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');


//********* Mongo DB **********
var mongoose = require('mongoose');
var db = require('./config/db');
var port = process.env.PORT || 8080; 
mongoose.connect(db.url); 
// grab the database models 
var User = require('./app/models/user');
var Spot = require('./app/models/spot');
var userSpot = require('./app/models/user_spot');
//*****************************

app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public')); 

//************** OAuth for GitHub *********** 
var config = require('./config/config');
var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var partials = require('express-partials');
var session = require('express-session');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new GitHubStrategy({
    clientID: config.GITHUB_CLIENT_ID,
    clientSecret: config.GITHUB_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:8080/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...

    process.nextTick(function () {
      // To keep the example simple, the user's GitHub profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the GitHub account with a user record in your database,
      // and return that user instead.
      //if(profile){
      var username = profile._json.login;
      var profilePhoto = profile._json.avatar_url;
      User.find({username: username},function(err, users) {
        if (err) {
            done(err,null);
        } else if(users.length){
          users[0].profilePhoto = profilePhoto;
          done(null, users[0]);
        } else {
          var newUser = User({username: username, profilePhoto: profilePhoto});
          newUser.save(function(err){
            if(err){
              done(err,null);
            } else {
              done(null, newUser);
            }
          })
        }
      })
    });
  }
));


app.use(methodOverride());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}

//************** OAuth for GitHub Complete *********** 

// **************** Routes ******************
app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }),
  function(req, res){
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
  });

// GET /auth/github/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/logout', function(req, res){
  console.log('dfdfsdfsdfsdfdfsdfsdf');
  req.logout();
  res.redirect('/');
});

app.get('/login', function(req, res){
  res.sendfile('./public/views/login.html');
});

app.get('/', ensureAuthenticated, function(req, res){
  res.sendfile('./public/views/index.html');
});


app.get('/api/users', ensureAuthenticated, function(req, res) {
  User.find(function(err, users) {
      if (err) {
          res.send(err);
      }
      res.json(users); // return all users in JSON format
  });
});

app.post('/api/users', ensureAuthenticated, function(req, res) {
  req.body.forEach(function(user){
    User({username: user.username, displayName: user.displayName, profilePhoto: user.profilePhoto}).save(function(err){
      if (err) {
        res.send(err);
      }
    });
  })
});


app.get('/api/spots', ensureAuthenticated, function(req, res) {
  // use mongoose to get all spots in the database
  Spot.find(function(err, spots) {
      if (err) {
          res.send(err);
      }
      res.json(spots); // return all spots in JSON format
  });
});

app.get('/api/userspots', ensureAuthenticated, function(req, res) {
  // use mongoose to get all spots in the database
  userSpot.find(function(err, userSpots) {
    if (err) {
        res.send(err);
    }
    res.json(userSpots); // return all spots in JSON format
  });
});

// app.post('/api/spots', ensureAuthenticated, function(req, res) {
//   // use mongoose to get all spots in the database
//   Spot.find(function(err, spots) {
//     if (err) {
//       res.send(err);
//     } else if(spots.length){
//       res.json(spots[0]);  
//     } else {
//       console.log(req.body);
//       var spotName = req.body.spotName;
//       var type = req.body.type;
//       var imageUrl = req.body.imageUrl;
//       var newSpot = Spot({spotName:spotName, type: type, imageUrl: imageUrl});
//       newSpot.save(function(err){
//         if(err){
//           console.err('ADFSASFSFSF');
//         } else {
//           res.json(newSpot);
//         }
//       })
//     }
//   });
// });

app.post('/api/spots', ensureAuthenticated, function(req, res) {
  req.body.forEach(function(spot){
    Spot({spotName: spot.spotName, type: spot.type, imageUrl: spot.imageUrl}).save(function(err){
      if (err) {
        res.send(err);
      }
    });
  })
});

app.get('/api/userspots', ensureAuthenticated, function(req, res) {
  // use mongoose to get all spots in the database
  userSpot.find(function(err, userSpots) {
      if (err) {
          res.send(err);
      }
      res.json(userSpots); // return all spots in JSON format
  });
});

// app.post('/api/userspots', ensureAuthenticated, function(req, res) {
//   req.body.forEach(function(combo){
//     userSpot.find({userId: combo.userId, spotId: combo.spotId},function(err, userSpots) {
//       if (err) {
//           res.send(err);
//       } else if(!userSpots.length){
//         var newUserSpot = userSpot({userId: combo.userId, spotId: combo.spotId});
//         newUserSpot.save(function(err){
//           res.send(200, newUserSpot);
//         })
//       }
//     });
//   })
// });

app.post('/api/userspots', ensureAuthenticated, function(req, res) {
  req.body.forEach(function(combo){
    userSpot({userId: combo.userId, spotId: combo.spotId}).save(function(err){
      if(err){
        res.send(err);
      }
    })
  })
});

app.get('/*', ensureAuthenticated, function(req, res) {
    res.redirect('/'); // load our public/index.html file
});

// **************** Routes complete ******************

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app; 

