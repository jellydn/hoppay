'use strict';

/* jshint -W098 */
angular.module('mean.shops').controller('ShopsController', ['$scope', 'Global', 'Shops',
  function($scope, Global, Shops) {
    $scope.global = Global;
    $scope.package = {
      name: 'shops'
    };
  }
]);
