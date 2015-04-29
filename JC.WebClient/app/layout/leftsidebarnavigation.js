(function () {
    'use strict';

    var controllerId = 'LeftSideBarNavigationController'
    angular
        .module('app')
        .controller(controllerId, leftSideBarNavigation);

    leftSideBarNavigation.$inject = ['$scope', '$route', 'routes'];

    function leftSideBarNavigation($scope, $route, routes) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'leftSideBarNavigation';
        vm.isCurrent = isCurrent;

        activate();

        function activate() {
            getNavigation();
        }

        function getNavigation() {
            vm.routes = routes.filter(function (r) {
                return r.config.settings && r.config.settings.content;
            });
        }

        function isCurrent(route) {
            if (!route.config.title || !$route.current || $route.current.title) {
                return '';
            }

            var menu = route.config.title;
            return route.current.title.substr(0, menu.length) === menu ? 'active' : '';
        }

    }
})();
