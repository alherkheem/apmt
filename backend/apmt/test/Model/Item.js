var assert = require('assert');
var path = require('path');
var Testing = require('nrcm').Testing;

describe('Item', function () {

    var testing = new Testing(path.join(__dirname, '../../../apmt'), {
        'default' : {
            'type' : 'Mock',
            'host' : '0.0.0.0',
            'port' : '8091',
            'index' : 'index'
        }
    });

    describe('find', function () {

        var model;
        beforeEach(function () {
            model = testing.createModel('Item');
        });

        it('should call Model', function (done) {
            model.find(null, function (result) {
                done();
            });
        });

    });

});