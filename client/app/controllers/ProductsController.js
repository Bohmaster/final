'use strict';
angular.module('the_final')
  .controller('ProductsController',
    function($rootScope, $scope, $stateParams, Product, Category, SubCategory) {
      // init
      $scope.categories = [];
      $scope.products = [];
      $scope.categorySelected = false;

      // pagination
      var limit = 2;
      var page = $stateParams.page;
      if (page == "1") {
        var offset = null;
      } else {
        var offset = page * limit - limit;
      }

      $scope.pages = [];

      loadCategories();
      loadProducts();
      countProducts();

      // check product state
      if ($stateParams.categoryId) {
        Product.find({
          filter: {
            limit: limit,
            offset: offset,
            where: {
              categoryId: $stateParams.categoryId
            }
          }
        }, function(data) {
          $scope.products = data;
        });
      } else if ($stateParams.subCategoryId) {
        Product.find({
          filter: {
            limit: limit,
            offset: offset,
            where: {
              subCategoryId: $stateParams.subCategoryId
            }
          }
        }, function(data) {
          $scope.products = data;
        });
      } else {
        console.log($stateParams);
      }

      // public methods
      $scope.selectCategory = function(categoryId) {
        SubCategory.find({
          filter: {
            where: {
              categoryId: categoryId
            }
          }
        }, function(data) {
          $scope.currentCategory = data;
        });

        $scope.categorySelected = true;
      };

      // loaders
      function loadCategories() {
        Category.find(function(data) {
          $scope.categories = data;
        });
      }

      function loadProducts() {
        Product.find({
          filter: {
            limit: limit,
            offset: offset
          }
        },function(data) {
          $scope.products = data;
        });
      }

      function countProducts() {
        Product.count(function(data) {
          var totalCount = data.count;
          var pages = totalCount / limit;

          for	(var index = 0; index < pages; index++) {
            var _page = index + 1;
            $scope.pages.push(_page.toString());
          }
        });
      }

      console.log(page, offset);

  });
