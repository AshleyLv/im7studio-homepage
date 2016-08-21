'use strict';

var app = angular.module('walnut.welcome');

app.directive('walnutMap', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'components/map/map.html',
        link: link
    };
    function link(scope, element, attrs) {
    }
});