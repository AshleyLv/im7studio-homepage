'use strict';

var app = angular.module('walnut');

app.directive('walnutNavbar', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'components/navbar/navbar.html'
    }
});