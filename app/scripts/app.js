'use strict';

angular.module('pamexAngularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/operator/', {
        templateUrl: 'views/operator/index.html',
        controller: 'OperatorIndexCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
