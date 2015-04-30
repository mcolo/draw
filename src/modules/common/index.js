'use strict';

module.exports =
  angular.module('mxmrcl.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
