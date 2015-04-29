(function () {
    'use strict';

    var controllerId = 'TopNavigationController';

    angular
        .module('app')
        .controller(controllerId, topNavigationController);

    topNavigationController.$inject = ['$location']; 

    function topNavigationController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'topNavigationController';

        activate();

        function activate() { }
    }
})();
