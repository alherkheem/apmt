'use strict';

/**
 * @ngdoc function
 * @name apmtApp.controller:IterationsCtrl
 * @description
 * # IterationsCtrl
 * Controller of the apmtApp
 */
var app = angular.module('apmtApp');

app.controller('IterationsCtrl', ['$scope', '$location', '$route', 'NRCM', 'messages',
    function($scope, $location, $route, NRCM, messages) {
        $scope.removing = false;
        $scope.iterations = [];
        $scope.loading = true;

        NRCM.iterations.list(function(iterations) {
            $scope.iterations = iterations;
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
            if (this.currentIterationId) {
                NRCM.iterations.remove(this.currentIterationId, function(success) {
                    if (success) {
                        messages.success('Iteration removed successfully!');
                        $route.reload();
                    }
                    this.removing = false;
                });
            }
        };
    }
]);
app.controller('IterationsSaveCtrl', ['$scope', '$location', '$routeParams', 'NRCM', 'messages',

    function($scope, $location, $routeParams, NRCM, messages) {
        var id = $routeParams.id;

        if (id === undefined) {
            $scope.mode = 'Add';
        } else {
            $scope.mode = 'Edit';
            $scope.loading = true;

            NRCM.iterations.read(id, function(data) {
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
                NRCM.iterations.save(iteration, function(data) {
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