angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'SpotsController'
        })
        .when('/trends', {
            templateUrl: 'views/trends.html',
            controller: 'TrendsController'
        })
        .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
}]);