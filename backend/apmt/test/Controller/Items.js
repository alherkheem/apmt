var assert = require('assert');
var path = require('path');
var Testing = require('nrcm').Testing;

describe('Items', function () {
    var testing = new Testing(path.join(__dirname, '../../../apmt'), {
         'default' : {
            'type' : 'Mock',
            'host' : '0.0.0.0',
            'port' : '8091',
            'index' : 'index'
        }
    });

    describe('get', function () {

        it('should return a json with the record if the id was found in database', function (done) {
            var findResult = {
                'title' : 'It is a sample'
            };
            var options = {
                'payload' : {
                },
                'query' : {
                    'id' : '1'
                }
            };
            var Item = testing.loadModel('Item');
            Item.prototype.find = function (query, callback) {
                callback(null, findResult);
            };
            testing.callController('Items', 'get', options, function (response) {
                assert.equal(JSON.stringify(findResult), JSON.stringify(response));
                done();
            });
        });

        it('should return an error if the id does not exit in database', function (done) {
            var findResult = {
                'err' : 'Error'
            };
            var options = {
                'payload' : {
                },
                'query' : {
                    'id' : '1'
                }
            };
            var Item = testing.loadModel('Item');
            Item.prototype.find = function (query, callback) {
                callback(err);
            };
            testing.callController('Items', 'get', options, function (response) {
                done();
            });
        });

    });

});
