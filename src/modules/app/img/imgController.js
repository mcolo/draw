'use strict';

module.exports = /*@ngInject*/
  function imgController($scope, $state, $stateParams, imgService, $rootScope, gaService, $location) {

    $rootScope.state = $state.current.name;
    var baseUrl = 'http://res.cloudinary.com/mxmrcl/image/upload/f_auto,w_1100,c_scale/';
    var format = '.jpg';

    imgService.fetch().then(function(data) {
	  	angular.forEach(data.images, function(value,key) {
	  		if(value.id == $stateParams.id) {
                $scope.img = value;
                $scope.img.url = baseUrl + value.code + format;
	  		}
	  	});
    });

    gaService.pageview($location.absUrl);
};