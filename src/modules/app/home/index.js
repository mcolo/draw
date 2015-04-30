'use strict';

module.exports =
  angular.module('mxmrcl.home', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'app/home/home.html',
      controller: 'homeController'
    });
  })
  .controller('homeController', require('./homeController'));
