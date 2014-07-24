var assert = require('assert');
var path = require('path');
var Testing = require('nrcm').Testing;

describe('Items', function () {

    var testing = new Testing(path.join(__dirname, '../../../apmt'));

    describe('get', function () {

        it('should return a json with the record if the id is passed trough the query string', function (done) {
            var options = {
                'payload' : {
                },
                'query' : {
                    'id' : 'string'
                }
            };
            testing.callController('Items', 'get', options, function (response) {
                assert.equal(JSON.stringify(options.payload), JSON.stringify(response.payload));
                done();
            });
        });

    });

});
