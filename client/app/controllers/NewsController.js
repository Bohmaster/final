'use strict';
angular.module('the_final')
  .controller('NewsController', function($scope, $stateParams, Event) {

    if ($stateParams.noticeId) {

      $scope.notice = Event.findById({id: $stateParams.noticeId});

    }

    $scope.articles = [];

    // pagination
    var limit = 4;
    var page = $stateParams.page;
    if (page == "1") {
      var offset = null;
    } else {
      var offset = page * limit - limit;
    }

    $scope.pages = [];

    function loadArticles () {

      Event.find({

        filter: {

          limit: limit,
          offset: offset

        }

      },

        function(data) {

          $scope.articles = data;

      });

      Event.count(function(data) {
        var totalCount = data.count;
        var pages = totalCount / limit;

        for	(var index = 0; index < pages; index++) {
          var _page = index + 1;
          $scope.pages.push(_page.toString());
        }
        console.log(data.count);
      });

    }

    loadArticles();



  });
