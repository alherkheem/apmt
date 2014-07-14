'use strict';

describe('Service: NRCM', function() {

    // load the service's module
    beforeEach(module('apmtApp'));

    // instantiate service
    var NRCM;
    beforeEach(inject(function(_NRCM_) {
        NRCM = _NRCM_;
    }));


    it('iterations.list() should return all the iterations', function(done) {
        NRCM.iterations.list(function(data) {
            assert.equal('object', typeof data);
            done();
        });
    });

    it('iterations.read() should read a single record', function(done) {
        NRCM.iterations.read('', function(data) {
            assert.equal(null, data);
            done();
        });
    });

    it('iterations.save() should save the iteration passed and assign an id', function(done) {
        var iteration = {};
        NRCM.iterations.save(iteration, function(data) {
            assert.equal('string', typeof data.id);
            done();
        });
    });

    it('uuid() should return a valid uuid', function() {
        assert.equal(NRCM.uuid().length, 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.length);
    });

});