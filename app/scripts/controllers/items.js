'use strict';

/**
 * @ngdoc function
 * @name apmtApp.controller:IterationsCtrl
 * @description
 * # IterationsCtrl
 * Controller of the apmtApp
 */
var app = angular.module('apmtApp');

app.controller('ItemsCtrl', ['$scope', '$route', 'NRCM', 'messages',
    function($scope, $route, NRCM, messages) {
        $scope.loading = true;

        NRCM.items.list(function(data) {
            $scope.loading = false;
            $scope.items = data;
            $scope.safeApply();
        });

        $scope.remove = function(id) {
            $scope.removing = true;
            $scope.currentItemId = id;
            $scope.safeApply();
        };

        $scope.closeConfirm = function() {
            $scope.removing = false;
            $scope.safeApply();
        };

        $scope.confirmRemove = function() {
            if (this.currentItemId) {
                NRCM.items.remove(this.currentItemId, function(success) {
                    if (success) {
                        messages.success('Item removed successfully!');
                        $route.reload();
                    }
                    $scope.removing = false;
                });
            }
        };
    }
]);

app.controller('ItemsSaveCtrl', ['$scope', '$location', '$routeParams', 'NRCM', 'messages',
    function($scope, $location, $routeParams, NRCM, messages) {
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

            if (id === undefined) {
                $scope.loading = false;
                $scope.mode = 'Add';
                $scope.safeApply();
            } else {
                $scope.mode = 'Edit';
                NRCM.items.read(id, function(data) {
                    $scope.loading = false;
                    if (!data) {
                        messages.error('Item not found!');
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
                        messages.error('Error while trying to save item.');
                    } else {
                        messages.success('Item saved successfully!');
                    }
                    $location.path('/items');
                    $scope.$apply();
                });
            }
        };

 }
]);