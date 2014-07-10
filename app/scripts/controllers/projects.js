'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the myYoProjectApp
 */

function getProjects() {
    var projects = $.cookie('projects');
    if (projects === undefined) {
        projects = [];
    }
    return projects;
}

function setProjects(projects) {
    $.cookie('projects', projects);
}

angular.module('myYoProjectApp')

.controller('ProjectsCtrl', ['$scope', '$location', '$route',

    function($scope, $location, $route) {
        var projects = getProjects();
        $scope.projects = projects;

        $scope.remove = function(index) {
            $scope.projects.splice(index, 1);
            setProjects($scope.projects);
            $route.reload();
        };

    }
])
    .controller('ProjectsSaveCtrl', ['$scope', '$location', '$routeParams',

        function($scope, $location, $routeParams) {
            var projects = getProjects();

            var index = $routeParams.id;

            if (index === undefined) {
                $scope.mode = 'Add';
            } else {
                $scope.mode = 'Edit';
                $scope.project = projects[index];
            }

            $scope.save = function(project) {
                if (index !== undefined) {
                    projects[index] = project;
                } else {
                    projects.push(project);
                }
                setProjects(projects);
                $location.path('/projects');
            };

        }
    ]);