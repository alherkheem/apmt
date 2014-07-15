'use strict';

var app = angular.module('apmtApp');
app.directive('apmtConfirm', function() {
    return {
        templateUrl: 'views/directives/apmt-confirm.html',
        restrict: 'E',
        replace: true,
        scope: {
            'message': '@',
            'onPositive': '&',
            'onNegative': '&'
        }
    };
});