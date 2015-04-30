'use strict';

module.exports = /*@ngInject*/
  angular.module('mxmrcl.img', [])
  .config(function ($stateProvider) {
    $stateProvider
    .state('img', {
      url: '/img?id',
      templateUrl: 'app/img/img.html',
      controller: 'imgController'
    });
  })
  .controller('imgController', require('./imgController'));