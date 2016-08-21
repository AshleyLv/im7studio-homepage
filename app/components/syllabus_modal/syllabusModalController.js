"use strict";

angular.module('walnut.welcome.syllabusModalController', ['ngScrollbars'])
    .controller('SyllabusModalCtrl', function ($scope, $uibModalInstance, items) {

        $scope.items = items;

        $scope.ok = function () {
            $uibModalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.config = {
            theme: 'dark',
            advanced: {
                updateOnContentResize: true
            },
            axis: 'y',
            autoHideScrollbar: true,
            setHeight: 600
        }
    });