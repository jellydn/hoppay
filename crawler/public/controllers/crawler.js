'use strict';

/* jshint -W098 */
angular.module('mean.crawler').controller('CrawlerController', ['$scope', 'Global', 'Crawler',
  function($scope, Global, Crawler) {
    $scope.global = Global;
    $scope.package = {
      name: 'crawler'
    };
  }
]);
