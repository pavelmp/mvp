angular.module('myApp.spots', []).controller('SpotsController', function($scope, Spots, Users, UserSpots) {
  
  $scope.users = [];
  $scope.spots = [];
  $scope.userSpots = [];
  $scope.usersInSpot = {};
  $scope.lastSpot;

  $scope.addMe = function(spotnumID){
    if($scope.lastSpot !== undefined){
      $scope.usersInSpot[$scope.lastSpot].pop();  
    }
    $scope.usersInSpot[spotnumID].push($scope.users[5]);
    $scope.lastSpot = spotnumID;    
    $scope.$apply();
  };

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
      users.forEach(function(user,ind){
        user.numID = ind;
      })
      $scope.users = users;
    })
  };

  var retrieveSpots = function(){
    Spots.get().then(function(spots){
      spots.forEach(function(spot,ind){
        spot.numID = ind;
      })
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
          return userSpot.spotId === spot.numID
        }).map(function(v){
          return v.userId
        });

      $scope.usersInSpot[spot.numID] = $scope.users.filter(function(user,ind){
        return userArray.indexOf(user.numID) >= 0;
      })
    })
  };

  retrieveUsers();
  retrieveSpots();
  retrieveUserSpots();
  setTimeout(populateSpots,500);
  setTimeout($scope.$apply,1000);
});