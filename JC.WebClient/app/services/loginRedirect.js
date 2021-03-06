﻿(function () {
    'use strict';

    angular
        .module('app')
        .factory('loginRedirect', loginRedirect);
    angular.module('app').config(function ($httpProvider) {
        $httpProvider.interceptors.push('loginRedirect');
    });

    loginRedirect.$inject = ['$q', '$location'];

    function loginRedirect($q, $location) {

        var lastPath = '/';

        var responseError = function (response) {
            if (response.status === 401) {
                lastPath = $location.path();
                $location.path('/login');
            }
            if (response.status === 404) {
                $location.path('/login');
            }
            return $q.reject(response);
        };

        var redirectPostLogin = function () {
            $location.path(lastPath);
            lastPath = '/';
        };
        return {
            responseError: responseError,
            redirectPostLogin: redirectPostLogin
        };

    }
})();