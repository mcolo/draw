'use strict';

module.exports =
  angular.module('mxmrcl.contact', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('contact', {
      url: '/contact',
      templateUrl: 'app/contact/contact.html',
      controller: 'contactController'
    });
  })
  .controller('contactController', require('./contactController'));
