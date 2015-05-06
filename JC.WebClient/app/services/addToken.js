(function () {
    'use strict';

    angular
        .module('app')
        .factory('addToken', addToken);

    angular.module('app').config(function ($httpProvider) {
        $httpProvider.interceptors.push('addToken');
    });

    addToken.$inject = ['$q', 'currentUser'];

    function addToken($q, currentUser) {

        var request = function (config) {
            if (currentUser.getProfile().isLoggedIn) {
                config.headers.Authorization = 'Bearer ' + currentUser.getProfile().token;
            }
            return $q.when(config);
        };

        return {
            request: request
        };
    }
})();