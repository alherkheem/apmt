'use strict';

describe('Filter: humanize', function() {

    // load the filter's module
    beforeEach(module('apmtApp'));

    // initialize a new instance of the filter before each test
    var humanize;
    beforeEach(inject(function($filter) {
        humanize = $filter('humanize');
    }));

    it('should convert UPPER_CASE_UNDERSCORED to Camel Case With Spaces', function() {
        assert.equal(humanize('TO_DO'), 'To Do');
        assert.equal(humanize('TO__DO'), 'To  Do');
        assert.equal(humanize('_TO_DO'), 'To Do');
        assert.equal(humanize(''), '');
        assert.equal(humanize(false), false);
    });

});