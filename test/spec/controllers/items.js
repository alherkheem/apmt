'use strict';

describe('ItemsSaveCtrl', function () {

    // load the controller's module
    beforeEach(module('apmtApp'));

    var scope;

    var nrcm = { 
        iterations : {
            list : function(callback) {
                callback([]);
            }
        },
        items : {
            list : function(iterationId, callback) {
                callback([]);
            }
        }
    };
    var routeParams = { };
    var messages = {
        success : function() { }
    };

    var injectController = function($controller, $rootScope) {
        scope = $rootScope.$new();
        scope.safeApply = function(callback){
            if (callback) { 
                callback();
            }
        };
        $controller('ItemsSaveCtrl', {
            '$scope': scope,
            '$location': {
                path : function() {}
            },
            '$routeParams': routeParams,
            'nrcm': nrcm,
            'messages': messages
        });
    };

    // Initialize the controller and a mock scope
    beforeEach(function(){
        routeParams = { };
    });

    it('should set mode to Add if no id is passed', function() {
        inject(injectController);
        assert.equal('Add', scope.mode);
    });

    it('should set mode to Edit and output the item if an id is passed', function () {
        routeParams.id = 1;
        nrcm.items.read = function (id, callback) {
            assert.equal(1, id);
            var item = { };
            callback(item);
        };
        inject(injectController);
        assert.equal('Edit', scope.mode);
        assert.equal('{}', JSON.stringify(scope.item));
    });

    describe('save', function() {

        it('should pass the item to nrcm.items.save', function () {
            var data = { };
            nrcm.items.save = function(item, callback) {
                assert.equal(item, data);
                callback({'id' : 1});
            };  
            inject(injectController);
            scope.save(data);
        });

    });

});

describe('ItemsCtrl', function() {

    // load the controller's module
    beforeEach(module('apmtApp'));

    var scope;
    var items = [{
        'title': 'Item 1'
    }, {
        'title': 'Item 2'
    }];
    
    var nrcm = {
        iterations : {
            list: function(callback) {
                callback([]);
            }
        },
        items: {
            list: function(iterationId, callback) {
                callback(items);
            }
        }
    };
    var messages = {
        success : function() {

        }
    };
    var routeParams = { };

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        scope.safeApply = function(callback){
            if (callback) { 
                callback();
            }
        };
        $controller('ItemsCtrl', {
            '$scope': scope,
            '$route': {
                reload : function () { }
            },
            '$routeParams': routeParams,
            'nrcm': nrcm,
            'messages': messages
        });
    }));

    describe('remove', function() {

        it('should set currentItemId', function() {
            scope.remove(1);
            assert.equal(1, scope.currentItemId);
        });

    });

    describe('closeConfirm', function () {

        it('should set removing to false', function () {
            scope.removing = true;
            scope.closeConfirm();
            assert.equal(false, scope.removing);
        });
    });

    describe('confirmRemove', function(){

        it('should call nrcm.items.remove passing the currentItemId', function () {
            scope.currentItemId = 1;
            scope.removing = true;
            
            nrcm.items.remove = function(currentItemId, callback) {
                assert.equal(1, currentItemId);
                callback(true);
            };
            scope.confirmRemove();

            assert.equal(false, scope.removing);
        });
    });
});