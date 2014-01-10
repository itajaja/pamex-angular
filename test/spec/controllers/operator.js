'use strict';

describe('Controller: OperatorCtrl', function () {

  // load the controller's module
  beforeEach(module('pamexAngularApp'));

  var OperatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OperatorCtrl = $controller('OperatorCtrl', {
      $scope: scope
    });
  }));
});
