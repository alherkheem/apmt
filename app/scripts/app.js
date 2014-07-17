'use strict';

/**
 * @ngdoc overview
 * @name apmtApp
 * @description
 * # apmtApp
 *
 * Main module of the application.
 */
var app = angular.module('apmtApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
]);
app.config(function($routeProvider) {
    var routes = {
        '/': {
            'view': 'views/main.html',
            'controller': 'MainCtrl'
        },
        '/login': {
            'view': 'views/lo'
        },
        '/iterations': {
            view: 'views/iterations/index.html',
            controller: 'IterationsCtrl'
        },
        '/iterations/save': {
            view: 'views/iterations/save.html',
            controller: 'IterationsSaveCtrl'
        },
        '/iterations/save/:id': {
            view: 'views/iterations/save.html',
            controller: 'IterationsSaveCtrl'
        },
        '/items': {
            view: 'views/items/index.html',
            controller: 'ItemsCtrl'
        },
        '/items/save': {
            view: 'views/items/save.html',
            controller: 'ItemsSaveCtrl'
        },
        '/items/save/:id': {
            view: 'views/items/save.html',
            controller: 'ItemsSaveCtrl'
        },
        '/items/:iterationId' : {
            view: 'views/items/index.html',
            controller: 'ItemsCtrl'
        },
        '/projects': {
            view: 'views/projects.html',
            controller: 'ProjectsCtrl'
        },
        '/projects/save': {
            view: 'views/projects/save.html',
            controller: 'ProjectsSaveCtrl'
        },
        '/projects/save/:id': {
            view: 'views/projects/save.html',
            controller: 'ProjectsSaveCtrl'
        }
    };

    for (var i in routes) {
        if (routes.hasOwnProperty(i)) {
            $routeProvider.when(i, {
                'templateUrl': routes[i].view,
                'controller': routes[i].controller
            });
        }
    }

    $routeProvider.otherwise({
        redirectTo: '/'
    });
});

$.cookie.json = true;