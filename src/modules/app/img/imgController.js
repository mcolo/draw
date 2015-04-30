'use strict';

module.exports = /*@ngInject*/
  function imgController($scope, $state, $stateParams, imgService, $rootScope) {
    imgService.fetch().then(function(data) {
	  	angular.forEach(data.images, function(value,key) {
	  		if(value.id == $stateParams.id) {
  				$rootScope.pageHeader = value.title;
	  			$scope.img = value;
	  		}
	  	});
    });
};