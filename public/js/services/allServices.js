angular.module('allServices', [])
  .factory('Spots', ['$http', function($http) {
    return {
      get : function() {
        return $http.get('/api/spots'); //return an array of spots in JSON
      },
      add : function(spotData) {
        return $http.post('/api/spots', spotData);
      }
    }       
  }])