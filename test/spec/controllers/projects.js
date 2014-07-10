'use strict';

describe('Controller: ProjectsCtrl', function() {

    // load the controller's module
    beforeEach(module('myYoProjectApp'));

    var ProjectsCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ProjectsCtrl = $controller('ProjectsCtrl', {
            $scope: scope
        });
    }));

    it('should output the projects', function() {
        expect(typeof scope.projects).toBe('object');
    });

    it('should remove the project when you pass the index to remove', function() {
        scope.projects = [{
            'name': 'Project',
            'start': '2000-01-01',
            'end': '2000-01-01'
        }];
        var index = 0;
        scope.remove(index);
        expect(scope.projects.length).toBe(0);
    });
});
