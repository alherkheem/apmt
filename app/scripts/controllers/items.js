'use strict';

/**
 * @ngdoc function
 * @name apmtApp.controller:IterationsCtrl
 * @description
 * # IterationsCtrl
 * Controller of the apmtApp
 */
var app = angular.module('apmtApp');

app.controller('ItemsCtrl', ['$scope', '$route', 'NRCM',
    function($scope, $route, NRCM) {
        $scope.loading = true;

        NRCM.items.list(function(data) {
            $scope.loading = false;
            $scope.items = data;
            $scope.safeApply();
        });

        // $scope.remove = function(id) {
        // if (confirm('Are you sure you want to remove this item?')) {
        //     NRCM.items.remove(id, function(success) {
        //         if (success) {
        //             alert('Item removed successfully!');
        //         } else {
        //             alert('Error while trying to remove item.');
        //         }
        //         $route.reload();
        //     });

        // }
        // };
    }
]);

app.controller('ItemsSaveCtrl', ['$scope', '$location', '$routeParams', 'NRCM',
    function($scope, $location, $routeParams, NRCM) {
        var id = $routeParams.id;

        $scope.loading = true;

        $scope.iterations = [];

        NRCM.iterations.list(function(iterations) {
            $scope.iterations = {};
            var iteration, i;
            for (i in iterations) {
                iteration = iterations[i];
                $scope.iterations[iteration.id] = iteration.name;
            }
            console.log($scope.iterations);

            if (id === undefined) {
                $scope.loading = false;
                $scope.mode = 'Add';
                $scope.safeApply();
            } else {
                $scope.mode = 'Edit';
                NRCM.items.read(id, function(data) {
                    $scope.loading = false;
                    if (!data) {
                        //alert('Item not found!');
                    }
                    $scope.item = data;
                    $scope.safeApply();
                });
            }
        });

        $scope.save = function(item) {
            if (item) {
                $scope.saving = true;
                NRCM.items.save(item, function(data) {
                    if (!data) {
                        //alert('Error while trying to save item');
                    }
                    $location.path('/items');
                    $scope.safeApply();
                });
            }
        };

 }
]);