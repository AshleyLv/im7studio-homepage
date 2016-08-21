'use strict';

// Declare app level module which depends on views, and components
angular.module('walnut', [
    'ngRoute',
    'walnut.welcome'
])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/welcome'});
    }]);
