'use strict';

describe('Service: ProveedorDeAutenticacion', function () {

  // instantiate service
  var ProveedorDeAutenticacion,
    init = function () {
      inject(function (_ProveedorDeAutenticacion_) {
        ProveedorDeAutenticacion = _ProveedorDeAutenticacion_;
      });
    };

  // load the service's module
  beforeEach(module('webApp'));

  it('should do something', function () {
    init();

    expect(!!ProveedorDeAutenticacion).toBe(true);
  });

  it('should be configurable', function () {
    module(function (ProveedorDeAutenticacionProvider) {
      ProveedorDeAutenticacionProvider.setSalutation('Lorem ipsum');
    });

    init();

    expect(ProveedorDeAutenticacion.greet()).toEqual('Lorem ipsum');
  });

});
