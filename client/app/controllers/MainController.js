'use strict';
angular.module('the_final')
  .controller('MainController', function($rootScope, $scope) {
    $scope.inicio = true;

    $scope.changeSection = function() {
      $scope.inicio = false;
    }
  });

