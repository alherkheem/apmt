'use strict';

/**
 * @ngdoc service
 * @name myYoProjectApp.projects
 * @description
 * # projects
 * Service in the myYoProjectApp.
 */
angular.module('myYoProjectApp')
    .service('projects', function projects() {
    	this.read = function() {
    		var projects = $.cookie('projects');
    		return projects === undefined? [] : projects;

    	};
    	this.save = function(projects) {
    		$.cookie('projects', projects);
    	};
    });