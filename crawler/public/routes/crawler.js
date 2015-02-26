'use strict';

angular.module('mean.crawler').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('crawler example page', {
      url: '/crawler/example',
      templateUrl: 'crawler/views/index.html'
    });
  }
]);
