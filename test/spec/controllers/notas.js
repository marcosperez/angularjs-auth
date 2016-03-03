'use strict';

describe('Controller: NotasCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var NotasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NotasCtrl = $controller('NotasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NotasCtrl.awesomeThings.length).toBe(3);
  });
});
