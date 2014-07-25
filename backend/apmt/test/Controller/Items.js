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

    describe('options', function () {
        it('should answer and empty object with 200 status code', function (done) {
            testing.callController('Items', 'options', { }, function (response, info) {
                assert.equal(JSON.stringify({}), JSON.stringify(response));
                assert.equal(200, info.statusCode);
                done();
            });
        });
    });

    describe('post', function () {
        it('should pass all payload data to the model save method', function (done) {
            var modelId = 1;
            var modelData = {
                'title' : 'It is a sample'
            };
            var options = {
                'payload' : modelData,
                'query' : {
                    'id' : modelId
                }
            };

            // Mock the save method
            testing.mockModel('Item', {
                'save' : function (id, data, callback) {
                    assert.equal(JSON.stringify(modelId), JSON.stringify(id));
                    assert.equal(JSON.stringify(modelData), JSON.stringify(data));
                    callback(null, { });
                }
            });

            testing.callController('Items', 'post', options, function (response, info) {
                assert.equal(JSON.stringify({}), JSON.stringify(response));
                assert.equal(200, info.statusCode);
                done();
            });
        });
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

            testing.mockModel('Item', {
                'find' : function (query, callback) {
                    callback(null, findResult);
                }
            });

            testing.callController('Items', 'get', options, function (response, info) {
                assert.equal(JSON.stringify(findResult), JSON.stringify(response));
                assert.equal(200, info.statusCode);
                done();
            });
        });

        it('should return an empty 404 response if the id does not exit in database', function (done) {
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
            testing.mockModel('Item', {
                'find' : function (query, callback) {
                    callback(findResult);
                }
            });
            testing.callController('Items', 'get', options, function (response, info) {
                assert.equal('{}', JSON.stringify(response));
                assert.equal(404, info.statusCode);
                done();
            });
        });

    });

});
