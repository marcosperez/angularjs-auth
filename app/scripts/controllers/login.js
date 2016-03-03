'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('LoginCtrl',['$scope','$auth','$location','$log' ,
                  function ($scope,$auth, $location,$log) {


    if($auth.isAuthenticated())
        $location.path('/')

    $scope.mensaje = function(){
        $log.info('Hola: '+$scope.nombre);
    }

    $log.info(':D');
    $scope.logearse = function(){
        $log.log('logeando...');
        $auth.login({
            nombre: $scope.nombre,
            password: $scope.password
        })
        .then(function(data){
            $log.info('Exitooo tengo el tokeeen'+data)
            // Si se ha logueado correctamente, lo tratamos aquí.
            // Podemos también redirigirle a una ruta
            $location.path('/')
        })
        .catch(function(response){
            $log.info('Noooo Errorr!'+response);
        });
    };

  }]);
