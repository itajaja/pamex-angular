'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('pamexAngularApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should toggle learnMore', function() {
    expect(scope.learnMore).toBe(false);
    scope.toggleLearnMore();
    expect(scope.learnMore).toBe(true);
    scope.toggleLearnMore();
    expect(scope.learnMore).toBe(false);
  });

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
