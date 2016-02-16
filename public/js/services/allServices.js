angular.module('allServices', [])
  .factory('Spots', ['$http', function($http) {
    return {
      get : function() {
        return $http({
          method: 'GET',
          url: '/api/spots'
        }).then(function (res) {
          return res.data;
        });
      },
      add : function(spotData) {
        return $http({
          method: 'POST',
          url: '/api/spots',
          data: [spotData]
        })
      },
      addAll : function(spots) {
        return $http({
          method: 'POST',
          url: '/api/spots',
          data: spots
        })
      }
    }       
  }])
  .factory('Users', ['$http', function($http) {
    return {
      get : function() {
        return $http({
          method: 'GET',  
          url:'/api/users'
        }).then(function(res){
          return res.data
        })
      },
      add : function(users) {
        return $http({
          method: 'POST',  
          url:'/api/users',
          data: users
        })
      }
    }       
  }])
  .factory('UserSpots', ['$http', function($http) {
    return {
      get : function() {
        return $http({
          method: 'GET',  
          url:'/api/userspots'
        }).then(function(res){
          return res.data
        })
      },
      addOne : function(combo) {
        return $http({
          method: 'POST',  
          url:'/api/userspots',
          data: [combo]
        })
      },
      addAll : function(combos) {
        return $http({
          method: 'POST',  
          url:'/api/userspots',
          data: combos
        })
      }
    }
  }])