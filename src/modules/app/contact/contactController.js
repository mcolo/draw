'use strict';

module.exports = /*@ngInject*/
  function contactController($scope, $http) {

    $scope.contact = {};

    $scope.result = {
        success: false,
        message: ''
    };

    $scope.transform = function(obj) {
        var str = [];
        for(var p in obj);
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
    }

    $scope.submit = function(contactform) {
        $scope.submitted = true;

        var paramData =  Object.keys($scope.contact).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent($scope.contact[k]);
        }).join('&');

        if (contactform.$valid) {
            $http({
                method           : 'POST',
                url              : '/contact-form.php',
                headers          : { 'Content-Type': 'application/x-www-form-urlencoded' },  //set the headers so angular passing info as form data (not request payload)
                transformRequest : $scope.transform($scope.contact),
                data             : $scope.contact
            }).success(function(data){
                console.log(data);
                if (data.success) { //success comes from the return json object
                    $scope.result.message = data.message;
                    $scope.result.success=true;
                } else {
                    $scope.result.message = data.message;
                    $scope.result.success=false;
                }
            });
        } else {
            $scope.result.message = 'Failed';
            $scope.result.success=false;
        }
    };
};
