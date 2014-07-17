'use strict';

describe('IterationsSaveCtrl', function () {

    // load the controller's module
    beforeEach(module('apmtApp'));

    var scope;

    var nrcm = { iterations : { } };
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
        $controller('IterationsSaveCtrl', {
            $scope: scope,
            $location: {
                path : function(){}
            },
            $routeParams: routeParams,
            nrcm: nrcm,
            messages: messages
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

    it('should set mode to Edit and output the iteration if an id is passed', function () {
        routeParams.id = 1;
        nrcm.iterations.read = function (id, callback) {
            assert.equal(1, id);
            var iteration = { };
            callback(iteration);
        };
        inject(injectController);
        assert.equal('Edit', scope.mode);
        assert.equal('{}', JSON.stringify(scope.iteration));
    });

    describe('save', function() {

        it('should pass the iteration to nrcm.iterations.save', function () {
            var data = { };
            nrcm.iterations.save = function(iteration, callback) {
                assert.equal(iteration, data);
                callback({'id' : 1});
            };  
            inject(injectController);
            scope.save(data);
        });

    });

});

describe('IterationsCtrl', function() {

    // load the controller's module
    beforeEach(module('apmtApp'));

    var IterationsCtrl,
        scope;
    var iterations = [{
        'name': 'Sprint 1'
    }, {
        'name': 'Sprint 2'
    }];
    
    var nrcm = {
        iterations: {
            list: function(callback) {
                callback(iterations);
                assert(iterations === scope.iterations);
            }
        }
    };
    var messages = {
        success : function() {

        }
    };

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        scope.safeApply = function(callback){
            if (callback) {
                callback();
            }
        };
        IterationsCtrl = $controller('IterationsCtrl', {
            $scope: scope,
            $location: null,
            $route: {
                reload : function () {}
            },
            nrcm: nrcm,
            messages: messages
        });
    }));

    describe('remove', function() {

        it('should set currentIterationId', function() {
            scope.remove(1);
            assert.equal(1, scope.currentIterationId);
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

        it('should call nrcm.iterations.remove passing the currentIterationId', function () {
            scope.currentIterationId = 1;
            scope.removing = true;
            
            nrcm.iterations.remove = function(currentIterationId, callback) {
                assert.equal(1, currentIterationId);
                callback(true);
            };
            scope.confirmRemove();

            assert.equal(false, scope.removing);
        });
    });
});