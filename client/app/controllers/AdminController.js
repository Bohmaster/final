'use strict';
angular.module('the_final')
  .controller('AdminController',
    function($rootScope, $scope, $modal, Product, Category, SubCategory) {
      $scope.product = {};
      $scope.categories = [];
      $scope.subCategories = [];

      loadCategories();

      // public methods
      $scope.addProduct = function() {
        Product.create({
          name: $scope.product.name,
          price: $scope.product.price,
          categoryId: $scope.product.category,
          subCategoryId: $scope.product.subCategory
        }, function(data) {
          console.log('Producto creado');
        });
      };

      // loaders
      function loadCategories() {
        Category.find(function(data){
          $scope.categories = data;
        })
      }

      function loadSubCategories() {
        SubCategory.find({
          filter: {
            where: {
              categoryId: $scope.product.category
            }
          }
        }, function(data){
          $scope.subCategories = data;
        })
      }

      // bindings
      $('#category').on('input', function() {
        var x = $('#category').val();
        var z = $('#categories');
        var val = $(z).find('option[value="' + x + '"]');
        var endVal = val.attr('id');
        console.log(x, z, val);
        $scope.product.category = endVal;
      });

      $('#category').on('focusout', function() {
        loadSubCategories();
      });

      $('#subCategory').on('input', function() {
        var x = $('#subCategory').val();
        var z = $('#subCategories');
        var val = $(z).find('option[value="' + x + '"]');
        var endVal = val.attr('id');
        $scope.product.subCategory = endVal;
      });

    });
