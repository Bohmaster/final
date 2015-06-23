'use strict';
angular.module('the_final')
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app', {
        abstract: true,
        url: '/app',
        templateUrl: 'app/views/app.html',
        controller: 'MainController'
      })
      .state('app.home', {
        url: '',
        templateUrl: 'app/views/home.html'
      })
      .state('app.admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/products/main.html',
        controller: 'AdminController'
      })
      .state('app.products', {
        abstract: true,
        url: '/products',
        templateUrl: 'app/views/products/main.html',
        controller: 'ProductsController'
      })
      .state('app.products.list', {
        url: '/:page',
        templateUrl: 'app/views/products/list.html'
      })
      .state('app.products.category', {
        url: '/categoria/:categoryId',
        templateUrl: 'app/views/products/category.html',
        controller: 'ProductsController'
      })
      .state('app.products.subCategory', {
        url: '/subcategoria/:subCategoryId',
        templateUrl: 'app/views/products/sub.html',
        controller: 'ProductsController'
      });

    $urlRouterProvider.otherwise('/app');

  });
