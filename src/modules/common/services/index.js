'use strict';

module.exports =
  angular.module('mxmrcl.common.services', [])
  .factory('imgService', require('./imgService'))
  .factory('gaService', require('./gaService'));
