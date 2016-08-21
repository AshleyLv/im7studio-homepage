'use strict';

angular.module('walnut.welcome', ['ngRoute', 'ui.bootstrap', 'walnut.welcome.syllabusModalController'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/welcome', {
            templateUrl: 'welcome/welcome.html',
            controller: 'WelcomeCtrl'
        });
    }])

    .controller('WelcomeCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {
        $scope.showSyllabus = function (index) {
            var template = "";
            var size = 'lg';
            if(index == 1) {
                template = "syllabus_modal_online.html";
            } else if(index == 2) {
                template = "syllabus_modal_weekend.html";
            } else if(index == 3) {
                template = "syllabus_modal_free.html";
            } else if(index == 4) {
                template = "syllabus_modal_wechat.html";
                size = 'sm';
            }
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'components/syllabus_modal/' + template,
                controller: 'SyllabusModalCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {

            });
        }

    }]);