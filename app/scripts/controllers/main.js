'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
    .controller('MainCtrl', ['$scope', '$location',
        function($scope, $location) {
            $scope.menus = [{
                'name': 'Home',
                'url': '/'
            }, {
                'name': 'Projects',
                'url': '/projects'
            }];
            $scope.isMenuSelected = function(menu) {
                return menu.url === $location.path();
            };
        }
    ]);