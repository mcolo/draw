'use strict';

module.exports = /*@ngInject*/
  function imgService($q, $timeout, $http) {
    return {
        fetch: function() {

            var deferred = $q.defer();

            $timeout(function() {
                $http.get('/assets/hostedImgs/imgs.json').success(function(data) {
                    deferred.resolve(data);
                });
            }, 30);

            return deferred.promise;
        }
    };
  };
