(function() {
  'use strict';

  angular
    .module('virtualSkillDevelopment')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
