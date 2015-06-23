'use strict';
angular.module('the_final')
  .directive('getValue', function() {
    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
        $('#category').on('change', function() {
          console.log('event');
        })
      }
    }
  });
