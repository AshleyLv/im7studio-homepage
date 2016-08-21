'use strict';

var app = angular.module('walnut');

app.directive('walnutFooter', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'components/footer/footer.html'
    }
});