'use strict';

var app = angular.module('apmtApp');
app.service('messages', ['$rootScope',
    function ($rootScope) {

        this.success = function(message) {
            $rootScope.$emit('apmt-message', {
                'message': message,
                'type': 'success'
            });
        };

        this.error = function(message) {
            $rootScope.$emit('apmt-message', {
                'message': message,
                'type': 'error'
            });
        };

        this.warning = function(message) {
            $rootScope.$emit('apmt-message', {
                'message': message,
                'type': 'warning'
            });
        };

        this.info = function(message) {
            $rootScope.$emit('apmt-message', {
                'message': message,
                'type': 'info'
            });
        };

}]);