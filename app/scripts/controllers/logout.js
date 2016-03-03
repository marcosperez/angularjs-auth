'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the webApp
 */
angular.module('webApp')
.controller('LogoutCtrl',['$auth','$location', function ($auth,$location) {
    $auth.logout()
        .then(function() {
            // Desconectamos al usuario y lo redirijimos
            $location.path('/login')
        });
  }]);
