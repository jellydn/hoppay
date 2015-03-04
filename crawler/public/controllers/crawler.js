'use strict';

var DEBUG = true;	
var headersHttp = {
	getHeaders: function(data){
		var c = ProjectCookie.actions.getCookie("token");
		if(c != "") c = decodeURIComponent(c);
		c = c.replace(/"/g, '');
		if(typeof data == "undefined")
			return {
				"Content-Type": "application/json",
				'Accept':'application/json',
				"Access-Token": c
			};
		else return data;
	},
	postHeaders: function(){
		var c = ProjectCookie.actions.getCookie("token");
		if(c != "") c = decodeURIComponent(c);
		c = c.replace(/"/g, '');
		return {
			'Accept':'application/json',
			"Access-Token": c,
			'Content-Type': 'application/x-www-form-urlencoded'
		};
	},
	putHeaders: function(){
		var c = ProjectCookie.actions.getCookie("token");
		if(c != "") c = decodeURIComponent(c);
		c = c.replace(/"/g, '');
		return {
			"Access-Token": c,
			'Content-Type': 'application/json'
		};
	},
	deleteHeaders: function(){
		var c = ProjectCookie.actions.getCookie("token");
		if(c != "") c = decodeURIComponent(c);
		c = c.replace(/"/g, '');
		return {
			'Accept':'application/json',
			"Access-Token": c
		};
	},
}

var ProjectCookie = {
	actions:{
		setCookie: function(cname, cvalue, exdays) {
			var d = new Date();
			d.setTime(d.getTime() + (exdays*24*60*60*1000));
			var expires = "expires="+d.toGMTString();
			document.cookie = cname + "=" + cvalue + "; " + expires;
		},
		getCookie:function(cname){
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for(var i=0; i<ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1);
				if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
			}
			return "";
		},
		delCookie:function(cname){
			document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
		}
	}
}
var HOST = window.location.origin;
/* jshint -W098 */
angular.module('mean.crawler').controller('CrawlerController', ['$scope', 'Global', 'Crawler',
  function($scope, Global, Crawler) {
    $scope.global = Global;
    $scope.package = {
      name: 'crawler'
    };
  }
]).controller('Categories', ['$scope', 'Global', 'Crawler','$http',
  function($scope, Global, Crawler,$http) {
		console.log(Global);
		$scope.loading = false;
		$scope.categories = false;
		$scope.getCategories = function(){
			$scope.loading = true;
			$http({
				url: HOST+"/api/categories",
				params: {},
				method: "GET",
				headers: headersHttp.getHeaders(),
			}).success(function(res){
				
				console.log(res);
				$scope.loading = false;
				$scope.categories = res;
			}).error(function(res){
				if(DEBUG) console.log(res);
				$scope.loading = false;
			});
			
		}
		$scope.getCategories();
  }
]).controller('SubCategories', ['$scope', 'Global', 'Crawler','$http','$stateParams',
  function($scope, Global, Crawler,$http,$stateParams) {
		console.log(Global);
		$scope.loading = false;
		$scope.categories = false;
		$scope.cat = $stateParams.cat;
		$scope.getCategories = function(){
			$scope.loading = true;
			$http({
				url: HOST+"/api/subCategories",
				params: {cat:$stateParams.cat},
				method: "GET",
				headers: headersHttp.getHeaders(),
			}).success(function(res){
				
				console.log(res);
				$scope.loading = false;
				$scope.categories = res;
			}).error(function(res){
				if(DEBUG) console.log(res);
				$scope.loading = false;
			});
			
		}
		
		$scope.getCategories();
  }
]);
