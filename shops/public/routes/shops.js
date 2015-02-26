'use strict';

angular.module('mean.shops').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('shops example page', {
      url: '/shops/example',
      templateUrl: 'shops/views/index.html'
    });
  }
]);
