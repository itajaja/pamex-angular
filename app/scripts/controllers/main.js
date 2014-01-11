'use strict';

angular.module('pamexAngularApp')
  .controller('MainCtrl', function($scope) {
    $scope.learnMore = false;

    $scope.toggleLearnMore = function() {
      $scope.learnMore = !$scope.learnMore;
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
