'use strict';

/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # webApp
 *
 * Main module of the application.
 */
angular
    .module('webApp', [
    'ngAnimate'

        , 'ngCookies'

        , 'ngMessages'

        , 'ngResource'

        , 'ngRoute'

        , 'ngSanitize'

        , 'ngTouch'

        , 'satellizer'
  ])
    .config(['$routeProvider', '$authProvider', '$httpProvider'

            , function ($routeProvider, $authProvider, $httpProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: 'views/main.html'
                        , controller: 'MainCtrl'
                        , controllerAs: 'main'
                    })
                    .when('/about', {
                        templateUrl: 'views/about.html'
                        , controller: 'AboutCtrl'
                        , controllerAs: 'about'
                    })
                    .when('/login', {
                        templateUrl: 'views/login.html'
                        , controller: 'LoginCtrl'
                        , controllerAs: 'login'
                    })
                    .when('/logout', {
                        templateUrl: 'views/logout.html'
                        , controller: 'LogoutCtrl'
                        , controllerAs: 'logout'
                    })
                    .when('/signup', {
                        templateUrl: 'views/signup.html'
                        , controller: 'SignupCtrl'
                        , controllerAs: 'signup'
                    })
                    .when('/Notas', {
                            templateUrl: 'views/notas.html'
                            , controller: 'NotasCtrl'
                            , controllerAs: 'Notas'

                            })
                        .otherwise({
                            redirectTo: '/'
                        });

                        $authProvider.loginUrl = 'http://marcos.donweb-homeip.net/auth/login'; $authProvider.signupUrl = 'http://marcos.donweb-homeip.net/auth/signup'; $authProvider.tokenName = 'token'; $authProvider.tokenPrefix = 'Central';

                        // alternatively, register the interceptor via an anonymous factory
                        $httpProvider.interceptors.push(['$q', '$log', '$location', '$window', function ($q, $log, $location, $window) {
                            var tokenName = 'Central_token';
                            $log.log("generando header")
                            return {
                                request: function (config) {

                                    var token = localStorage.getItem(tokenName);
                                    if (token && config.httpInterceptor) {
                                        token = config.authHeader === 'Authorization' ? 'Bearer ' + token : token;
                                        httpConfig.headers[config.authHeader] = token;
                                    }
                                    return config;
                                },

                                responseError: function (response) {
                                    if (response.status === 401 || response.status === 403) {
                                        $location.path('/signup');
                                    }

                                    if (response.status === 422) {
                                        $window.alert("el usuario ya existe");
                                    }
                                    return $q.reject(response);
                                }
                            };
            }]);

                    }]).controller('HeaderController', ['$scope', '$auth', '$log'

            , function ($scope, $auth, $log) {

                $scope.estaAutenticado = function () {
                    return $auth.isAuthenticated();
                };
}]);
