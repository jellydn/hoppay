'use strict';

angular.module('mean.crawler').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('crawler example page', {
      url: '/crawler/example',
      templateUrl: 'crawler/views/index.html'
    });
	$stateProvider.state('categories', {
      url: '/admin/categories',
      templateUrl: 'crawler/views/categories.html'
    });
	$stateProvider.state('sub_categories', {
      url: '/admin/sub_categories?cat',
      templateUrl: 'crawler/views/sub_categories.html'
    });
  }
]);
