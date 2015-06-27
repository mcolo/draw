'use strict';

module.exports = /*@ngInject*/
  function contactController($scope, $http) {

    $scope.contact = {};

    $scope.result = {
        success: false,
        message: '',
        errors: []
    };


    $scope.submit = function(contactform) {
        var url = '/assets/mail/process.php';
        
        var str = [];
        for(var p in contactform) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(contactform[p]));
        }
        var paramData = str.join("&");

        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : url,
                data    : paramData,
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function(data){
                console.log(data);
                if (data.success) { //success comes from the return json object
                    $scope.result.message = data.message;
                    $scope.result.success = data.success;
                    $scope.result.errors = data.errors;
                } else {
                    $scope.result.message = data.message;
                    $scope.result.success = data.success;
                    $scope.result.errors = data.errors;
                }
            }).error(function(data, status, headers, config) {
                $scope.result.message = data.message;
                $scope.result.success = data.success;
                $scope.result.errors = data.errors;
            });
        } else {
            $scope.result.message = 'Failed';
            $scope.result.success = false;
        }
    };
};
