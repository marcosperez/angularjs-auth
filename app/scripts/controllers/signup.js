'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the webApp
 */
angular.module('webApp')
    .controller('SignupCtrl', ['$scope', '$auth', '$location', '$log','$document',
                               function ($scope, $auth, $location, $log,$document) {
        $scope.registrarse = function (form) {
            form =  $document.find('#registrationForm');
            $log.info("validando form: "+form.$valid);

            $auth.signup($scope.user).then(function (response) {
                    $location.path('/login');
                })
                .catch(function (response) {
                    $log.error(response);
                });
        }
    }]);
