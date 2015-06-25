'use strict';
angular.module('the_final')
  .directive('accordion', function() {
    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
        $(elem).find('.accordion-toggle').click(function(){

          console.log('clicked');

          //Expand or collapse this panel
          $(this).next().slideToggle('fast');

          //Hide the other panels
          $(".accordion-content").not($(this).next()).slideUp('fast');

        });
      }
    }
  });
