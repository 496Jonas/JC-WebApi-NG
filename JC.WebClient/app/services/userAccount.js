(function () {
    'use strict';

    angular
        .module('app')
        .factory('userAccount', ['$resource', 'dataConstants', userAccount]);

    function userAccount($resource, dataConstants) {

        return {
            getUsers: $resource(dataConstants.GETUSERS_URL, null,
                {
                    'getUsers': { method: 'GET' }
                }),
            registration: $resource(dataConstants.REGISTER_URL, null,
                {
                    'registerUser': { method: 'POST' },
                }),
            login: $resource(dataConstants.LOGIN_URL, null,
                {
                    'loginUser': {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        transformRequest: function (data, headersGetter) {
                            var str = [];
                            for (var d in data) {
                                str.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
                            }
                            return str.join('&').replace(/%20/g, '+');
                        }
                    }
                })
        }
    }
})();