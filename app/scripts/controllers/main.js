'use strict';

/**
 * @ngdoc function
 * @name apmtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the apmtApp
 */
var app = angular.module('apmtApp');

app.controller('MainCtrl', ['$scope', '$location',
    function($scope, $location) {
        $scope.menus = [{
            'name': 'Home',
            'url': '/'
        }, {
            'name': 'Iterations',
            'url': '/iterations'
        }, {
            'name': 'Items',
            'url': '/items'
        }];

        $scope.isMenuSelected = function(menu) {
            return menu.url === $location.path();
        };

        $scope.safeApply = function(fn) {
            var phase = this.$root.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if (fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

        $scope.toJ = function(obj) {
            return JSON.stringify(obj, null, 2);
        };
    }
]);

app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    };
});