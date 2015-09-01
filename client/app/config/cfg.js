'use strict';
angular.module('the_final')
  .run(function($rootScope) {

    $rootScope.$on('$viewContentLoaded', function(event) {

      Webflow.ready();

    });

  });
