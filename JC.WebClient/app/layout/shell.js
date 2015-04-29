(function () {
    'use strict';

    var controllerId = 'ShellController'
    angular
        .module('app')
        .controller(controllerId, shell);

    shell.$inject = ['$location']; 

    function shell($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'shell';

        activate();

        function activate() { }
    }
})();
