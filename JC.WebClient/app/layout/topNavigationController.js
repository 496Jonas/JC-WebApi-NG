(function () {
    'use strict';

    var controllerId = 'TopNavigationController';

    angular
        .module('app')
        .controller(controllerId, topNavigationController);

    topNavigationController.$inject = ['$location', 'currentUser']; 

    function topNavigationController($location, currentUser) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'topNavigationController';
        vm.isLoggedIn = function () {
            return currentUser.getProfile().isLoggedIn;
        };

        vm.userName = function () {
            return currentUser.getProfile().username;
        };
        
        vm.logout = function () {
            currentUser.removeProfile();
            currentUser.getProfile();
            $location.path('/login');
        }

        activate();

        function activate() { }
    }
})();
