'use strict';

/**
 * @ngdoc filter
 * @name apmtApp.filter:humanize
 * @function
 * @description
 * # humanize
 * Filter in the apmtApp.
 */
var app = angular.module('apmtApp');
app.filter('humanize', function() {
    return function(input) {
        if (typeof input !== 'string' || input === '') {
            return input;
        }

        var output = '';
        var parts = input.split('_');
        for (var i in parts) {
            if (output !== '') {
                output += ' ';
            }
            output +=
                parts[i].substring(0, 1).toUpperCase() +
                parts[i].substring(1).toLowerCase();
        }
        return output;


    };
});