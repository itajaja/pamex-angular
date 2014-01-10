'use strict';

describe('Service: pamexService', function () {

  // load the service's module
  beforeEach(module('pamexAngularApp'));

  // instantiate service
  var pamexService;
  beforeEach(inject(function (_pamexService_) {
    pamexService = _pamexService_;
  }));

  it('should do something', function () {
    expect(!!pamexService).toBe(true);
  });

});
