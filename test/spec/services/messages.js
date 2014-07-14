'use strict';

describe('Service: messages', function() {

    // load the service's module
    beforeEach(module('apmtApp'));

    // instantiate service
    var messages;
    beforeEach(inject(function(_messages_) {
        messages = _messages_;
    }));

    describe('messages.error()', function() {

        it('should emit the message event', function(done) {
            inject(function($rootScope) {
                $rootScope.$on('apmt-message', function(listener, params) {
                    assert(listener);
                    assert.equal('message', params.message);
                    assert.equal('error', params.type);
                    done();
                });
                messages.error('message');
                assert.equal('message', $.cookie(messages.ERROR_COOKIE));
            });
        });

    });

    describe('messages.success()', function() {

        it('should emit the message event', function(done) {
            inject(function($rootScope) {
                $rootScope.$on('apmt-message', function(listener, params) {
                    assert(listener);
                    assert.equal('message', params.message);
                    assert.equal('success', params.type);
                    done();
                });
                messages.success('message');
                assert.equal('message', $.cookie(messages.SUCCESS_COOKIE));
            });
        });

    });

    describe('messages.warning()', function() {

        it('should emit the message event', function(done) {
            inject(function($rootScope) {
                $rootScope.$on('apmt-message', function(listener, params) {
                    assert(listener);
                    assert.equal('message', params.message);
                    assert.equal('warning', params.type);
                    done();
                });
                messages.warning('message');
                assert.equal('message', $.cookie(messages.WARNING_COOKIE));
            });
        });

    });

    describe('messages.info()', function() {

        it('should emit the message event', function(done) {
            inject(function($rootScope) {
                $rootScope.$on('apmt-message', function(listener, params) {
                    assert(listener);
                    assert.equal('message', params.message);
                    assert.equal('info', params.type);
                    done();
                });
                messages.info('message');
                assert.equal('message', $.cookie(messages.INFO_COOKIE));
            });
        });

    });

});