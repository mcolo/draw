'use strict';

module.exports = /*@ngInject*/
  function homeController($scope, imgService, $state, $rootScope) {
  	$rootScope.pageHeader = 'MXMRCL';
  	$scope.loading = true;
    imgService.fetch().then(function(data) {
    	$scope.images = data.images;
    	$scope.loading = false;
	});

	$scope.goToImg = function(imgId) {
		$state.go('img', {id:imgId});
	};
};
