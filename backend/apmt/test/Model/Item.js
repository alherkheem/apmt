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
    var model;
    beforeEach(function () {
        model = testing.createModel('Item');
    });

    describe('find', function () {

        it('should call the callback', function (done) {
            model.find(null, function () {
                done();
            });
        });

    });

    describe('save', function () {

        it('should call the callback', function (done) {
            model.save(1, { }, function () {
                done();
            });
        });
    });

});