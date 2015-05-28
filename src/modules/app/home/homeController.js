'use strict';

module.exports = /*@ngInject*/
  function homeController($scope, imgService, $state, $rootScope, gaService, $location) {

    $scope.loading = true;
    $rootScope.state = $state.current.name;
    var baseUrl = 'http://res.cloudinary.com/mxmrcl/image/upload/f_auto,w_550,c_scale,q_70/';
    var format = '.jpg';

    imgService.fetch().then(function(data) {
      $scope.images = data.images;
      for(var x = 0; x < $scope.images.length; x++) {
        $scope.images[x].url = baseUrl + $scope.images[x].code + format;
      }
    	$scope.loading = false;
    });

    $scope.goToImg = function(imgId) {
      $state.go('img', {id:imgId});
    };

    gaService.pageview($location.absUrl);
};
