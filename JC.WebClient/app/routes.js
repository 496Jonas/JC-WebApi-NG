(function () {
    'use strict';

    var app = angular.module('app');

    app.constant('routes', getRoutes());

    app.config(['$routeProvider', 'routes', routeConfigurator]);

    function routeConfigurator($routeProvider, routes) {
        routes.forEach(function (r) {
            setRoute(r.url, r.config);
        });

        $routeProvider.otherwise({ redirectTo: '/' });

        function setRoute(url, definition) {
            definition.resolve = angular.extend(definition.resolve || {});
            $routeProvider.when(url, definition);
        }
    }

    function getRoutes() {
        return [{
            url: '/',
            config: {
                templateUrl: 'app/products/products.html',
                controller: 'ProductsController',
                controllerAs: 'vm',
                title: 'products',
                settings: {
                    content: '<span class="fa fa-user"></span> Products'
                }
            }
        }];

    }
})();