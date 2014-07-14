'use strict';

describe('Directive: apmt-confirm', function() {

    // load the directive's module
    beforeEach(module('apmtApp'));
    beforeEach(module('templates'));

    // it('should contain the passed message', function() {
    //     inject(function($compile, $rootScope) {
    //         var message = 'A message';
    //         var element = angular.element('<apmt-confirm message="' + message + '"></apmt-confirm>');
    //         element = $compile(element)($rootScope);
    //         $rootScope.$digest();
    //         assert.equal(message, element.find('p').text());
    //     });
    // });

    // it('should call the on-positive callback when the Yes button is clicked', function(done) {
    //     inject(function($compile, $rootScope) {
    //         $rootScope.onPositive = function() {
    //             done();
    //         };
    //         var element = $compile('<apmt-confirm on-positive="onPositive()"></apmt-confirm>')($rootScope);
    //         $rootScope.$digest();
    //         element.find('button.positive').triggerHandler('click');
    //         $rootScope.$digest();
    //     });
    // });

    // it('should call the on-negative callback when the No button is clicked', function(done) {
    //     inject(function($compile, $rootScope) {
    //         $rootScope.onNegative = function() {
    //             done();
    //         };
    //         var element = $compile('<apmt-confirm on-negative="onNegative()"></apmt-confirm>')($rootScope);
    //         $rootScope.$digest();
    //         element.find('button.negative').triggerHandler('click');
    //         $rootScope.$digest();
    //     });
    // });

});