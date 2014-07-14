'use strict';

describe('Service: CRUD', function() {

    // load the service's module
    beforeEach(module('apmtApp'));

    // instantiate service
    var CRUD;
    beforeEach(inject(function(_CRUD_) {
        CRUD = _CRUD_;
    }));

    it('should do something', function() {
        assert.equal(true, true);
    });

});