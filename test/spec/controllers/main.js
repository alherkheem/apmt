'use strict';

describe('Controller: MainCtrl', function() {

    // load the controller's module
    beforeEach(module('apmtApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope,
            $location: {
                path: function() {
                    return '/items';
                }
            }
        });
    }));

    it('should have a valid menus property', function() {
        assert(scope.menus.length > 0);
        for (var i in scope.menus) {
            var menu = scope.menus[i];
            assert(typeof menu.name === 'string');
            assert(typeof menu.url === 'string');
        }
    });

    describe('isMenuSelected()', function() {

        it('should return true when the items menu is passed', function() {
            assert.equal(true, scope.isMenuSelected({
                url: '/items'
            }));
        });

        it('should return false when another menu is passed', function() {
            assert.equal(false, scope.isMenuSelected({
                url: '/iterations'
            }));
        });

    });

});