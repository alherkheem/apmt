'use strict';

/**
 * @ngdoc function
 * @name apmtApp.controller:IterationsCtrl
 * @description
 * # IterationsCtrl
 * Controller of the apmtApp
 */
var app = angular.module('apmtApp');

app.controller('ItemsCtrl', ['$scope', '$route', '$routeParams', 'nrcm', 'messages',
    function($scope, $route, $routeParams, nrcm, messages) {
        var iterationId = $routeParams.iterationId;
        $scope.loading = true;

        var loadCompleted = function() {
            $scope.loading = false;
            $scope.safeApply();
        };

        nrcm.items.list(iterationId, function(items) {
            $scope.items = [];
            var record;
            for (record in items) {
                items[record].value.id = record;
                $scope.items.push(items[record].value);
            }
            // if iteration is passed, load it
            if (iterationId) {
                nrcm.iterations.read(iterationId, function(iteration) {
                    $scope.iteration = iteration;
                    loadCompleted();
                });
            } else {
                loadCompleted();
            }
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
            if ($scope.currentItemId) {
                nrcm.items.remove($scope.currentItemId, function(success) {
                    if (success) {
                        messages.success('Item removed successfully!');
                        $route.reload();
                    }
                    $scope.removing = false;
                    $scope.safeApply();
                });
            }
        };
    }
]);

app.controller('ItemsSaveCtrl', ['$scope', '$location', '$routeParams', 'nrcm', 'messages',
    function($scope, $location, $routeParams, nrcm, messages) {
        var id = $routeParams.id;

        $scope.loading = true;

        $scope.iterations = [];

        nrcm.iterations.list(function(iterations) {
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
                nrcm.items.read(id, function(data) {
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
                nrcm.items.save(item, function(data) {
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

        $scope.canSave = function() {
            return $scope.formSaveItem.$dirty && $scope.formSaveItem.$valid;
        };
    }
]);