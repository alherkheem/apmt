'use strict';

describe('Service: nrcm', function() {

    // load the service's module
    beforeEach(module('apmtApp'));

    // instantiate service
    var nrcm;
    beforeEach(inject(function(_nrcm_) {
        nrcm = _nrcm_;
    }));


    it('iterations.list() should return all the iterations', function(done) {
        nrcm.iterations.list(function(data) {
            assert.equal('object', typeof data);
            done();
        });
    });

    it('iterations.read() should read a single record', function(done) {
        nrcm.iterations.read('', function(data) {
            assert.equal(null, data);
            done();
        });
    });

    it('iterations.save() should save the iteration passed and assign an id', function(done) {
        var iteration = {};
        nrcm.iterations.save(iteration, function(data) {
            assert.equal('string', typeof data.id);
            done();
        });
    });

    it('uuid() should return a valid uuid', function() {
        assert.equal(nrcm.uuid().length, 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.length);
    });

});