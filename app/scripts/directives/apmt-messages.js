'use strict';

var app = angular.module('apmtApp');
app.directive('apmtMessages', ['$rootScope', 'messages',
    function($rootScope, messages) {
        return {
            templateUrl: 'views/directives/apmt-messages.html',
            restrict: 'E',
            scope: {
                'success': '&'
            },
            replace: true,
            link: function(scope) {
                var timer = null;
                $rootScope.$on('apmt-message', function(listener, params) {
                    if (timer !== null) {
                        clearTimeout(timer);
                    }
                    scope.message = params.message;
                    scope.type = params.type;
                    scope.$apply();

                    timer = setTimeout(function() {
                        scope.message = false;
                        scope.$apply();
                    }, 10000);
                });
            }
        };
    }]);