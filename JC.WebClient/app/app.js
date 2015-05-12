(function () {
    'use strict';

    var app = angular.module('app', [
        // Angular modules 
        'ngAnimate',
        'ngRoute',
        'ngSanitize',
        'ngResource',
        'ngCookies',
        // Custom modules 
        'common'

        // 3rd Party Modules
        
    ]);

    app.run(['$route', '$rootScope', '$q', function ($route, $rootScope, $q) {

    }]);
})();