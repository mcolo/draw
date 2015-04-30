'use strict';

module.exports = /*@ngInject*/
  function gaService($window) {
    return {
        pageview: function(url) {
            return $window.ga('send', 'pageview', { page: url });
        }
    };
  };
