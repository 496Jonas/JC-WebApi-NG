﻿(function () {
    'use strict';

    angular.module('app').constant('dataConstants', {
        GETUSERS_URL: 'http://localhost:52621/api/Account/Register',
        REGISTER_URL: 'http://localhost:52621/api/Account/Register',
        LOGIN_URL: 'http://localhost:52621/Token',
        SERVER_PATH: 'http://localhost:52621'
    });
})();