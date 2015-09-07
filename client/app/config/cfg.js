'use strict';
angular.module('the_final')
  .run(function($rootScope, $anchorScroll) {

    $rootScope.$on('$viewContentLoaded', function(event) {

      setTimeout(function() {
        Webflow.ready();
      }, 500);

    });

    $rootScope.$on('$stateChangeSuccess', function() {
      $anchorScroll();
    });

  });
