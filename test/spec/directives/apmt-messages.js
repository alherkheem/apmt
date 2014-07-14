'use strict';

describe('Directive: apmt-messages', function() {

    // load the directive's module
    beforeEach(module('apmtApp'));
    beforeEach(module('templates'));

    it('should contain the message if the correct event is emitted', function() {
        inject(function($compile, $rootScope) {
            var message = 'Some error message';
            var element = $compile('<apmt-messages></apmt-confirm>')($rootScope);
            $rootScope.$digest();
            $rootScope.$emit('apmt-message', {
                'message': message,
                'type': 'success'
            });
            $rootScope.$digest();
            assert.equal(message, element.find('p').text());
        });
    });
});