angular.module('myApp.spots', []).controller('SpotsController', function($scope, Spots, Users, UserSpots) {
  
  $scope.users = [];
  $scope.spots = [];
  $scope.userSpots = [];
  $scope.usersInSpot = {};

  //To populate database with fake data
  var postAllThings = function(){
    Users.add($scope.users2);
    Spots.addAll($scope.spots2);
  };
  //postAllThings();

  //Generate random spots and users:
  var randomData = function(){
    $scope.users.forEach(function(user,index){
      var randomIndex = Math.floor(Math.random()*$scope.spots.length);
      $scope.userSpots.push({userId: index, spotId: randomIndex});
    });
  };
  //setTimeout(randomData,2000);

  var postAllUserSpots = function(){
    UserSpots.addAll($scope.userSpots);
  };
  //setTimeout(postAllUserSpots,5000);


  var retrieveUsers = function(){
    Users.get().then(function(users){
      $scope.users = users;
    })
  };

  var retrieveSpots = function(){
    Spots.get().then(function(spots){
      $scope.spots = spots;
    });
  };

  var retrieveUserSpots = function(){
    UserSpots.get().then(function(userSpots){
      $scope.userSpots = userSpots;
    })
  };

  var populateSpots = function(){
    $scope.spots.forEach(function(spot,index){
      var userArray = $scope.userSpots.filter(function(userSpot){
          return userSpot.spotId === index
        }).map(function(v){
          return v.userId
        });

      $scope.usersInSpot[index] = $scope.users.filter(function(user,ind){
        return userArray.indexOf(ind) !== -1;
      })
    })
  };

  //setTimeout(addToDatabase,2000);
  //Run function to populate all users for each spot
  retrieveUsers();
  retrieveSpots();
  retrieveUserSpots();
  setTimeout(populateSpots,2000);

  function Print(){
    console.dir($scope.usersInSpot)
  };
  setTimeout(Print,3000);
});