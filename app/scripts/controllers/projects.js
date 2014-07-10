'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the myYoProjectApp
 */

angular.module('myYoProjectApp')

    .controller('ProjectsCtrl', ['$scope', '$location', '$route', 'projects',

        function($scope, $location, $route, projectsService) {
            var projects = projectsService.read();
            $scope.projects = projects;

            $scope.remove = function(index) {
                $scope.projects.splice(index, 1);
                projectsService.save($scope.projects);
                $route.reload();
            };

        }
    ])
    .controller('ProjectsSaveCtrl', ['$scope', '$location', '$routeParams', 'projects',

        function($scope, $location, $routeParams, projectsService) {
            var projects = projectsService.read();

            var index = $routeParams.id;

            if (index === undefined) {
                $scope.mode = 'Add';
            } else {
                $scope.mode = 'Edit';
                $scope.project = projects[index];
            }

            $scope.save = function(project) {
                if (project !== undefined) {
                    if (index !== undefined) {
                        projects[index] = project;
                    } else {
                        projects.push(project);
                    }
                    projectsService.save(projects);
                    $location.path('/projects');
                }
            };

        }
    ]);
