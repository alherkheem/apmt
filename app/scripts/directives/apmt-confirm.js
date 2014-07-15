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
        },
        link: function(scope) {
            scope.buttonsDisabled = false;
            scope.triggerPositive = function() {
                scope.buttonsDisabled = true;
                scope.onPositive();
            };
            scope.triggerNegative = function() {
                scope.buttonsDisabled = true;
                scope.onNegative();
            };
        }
    };
});