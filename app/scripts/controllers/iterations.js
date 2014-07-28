'use strict';

var app = angular.module('apmtApp');

app.controller('IterationsCtrl', ['$scope', '$location', '$route', 'nrcm', 'messages',

    function($scope, $location, $route, nrcm, messages) {

        $scope.removing = false;
        $scope.iterations = [];
        $scope.loading = true;

        nrcm.iterations.list(function(iterations) {

            for (record in iterations) {
                iterations[record].value.id = record;
                $scope.iterations.push(iterations[record].value);
            }

            $scope.loading = false;
            $scope.safeApply();
        });

        $scope.remove = function(id) {
            $scope.removing = true;
            $scope.currentIterationId = id;
            $scope.safeApply();
        };

        $scope.closeConfirm = function() {
            $scope.removing = false;
            $scope.safeApply();
        };

        $scope.confirmRemove = function() {
            if ($scope.currentIterationId) {
                nrcm.iterations.remove($scope.currentIterationId, function(success) {
                    if (success) {
                        messages.success('Iteration removed successfully!');
                        $route.reload();
                    }
                    $scope.removing = false;
                });
            }
        };
    }
]);

app.controller('IterationsSaveCtrl', ['$scope', '$location', '$routeParams', 'nrcm', 'messages',

    function($scope, $location, $routeParams, nrcm, messages) {
        var id = $routeParams.id;

        if (id === undefined) {
            $scope.mode = 'Add';
        } else {
            $scope.mode = 'Edit';
            $scope.loading = true;

            nrcm.iterations.read(id, function(data) {
                $scope.loading = false;
                if (data === null) {
                    messages.error('Iteration not found!');
                } else {
                    $scope.iteration = data;
                    $scope.$apply();
                }
            });
        }

        $scope.save = function(iteration) {
            if (iteration) {
                $scope.saving = true;
                nrcm.iterations.save(iteration, function(data) {
                    if (!data) {
                        messages.error('Error while trying to save iteration');
                    } else {
                        messages.success('Iteration saved successfully!');
                    }
                    $location.path('/iterations');
                    $scope.$apply();
                });
            }
        };

    }
]);