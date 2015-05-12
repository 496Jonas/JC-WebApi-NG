(function () {
    'use strict';

    angular
        .module('app')
        .controller('useraccountsController', useraccountsController);

    useraccountsController.$inject = ['$location']; 

    function useraccountsController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'useraccountsController';

        activate();

        function activate() { }
    }
})();
