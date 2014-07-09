'use strict';

/**
 * @ngdoc overview
 * @name myYoProjectApp
 * @description
 * # myYoProjectApp
 *
 * Main module of the application.
 */
angular
    .module('myYoProjectApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/projects', {
                templateUrl: 'views/projects.html',
                controller: 'ProjectsCtrl'
            })
            .when('/projects/save', {
                templateUrl: 'views/projects/save.html',
                controller: 'ProjectsSaveCtrl'
            })
            .when('/projects/save/:id', {
                templateUrl: 'views/projects/save.html',
                controller: 'ProjectsSaveCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

$.cookie.json = true;