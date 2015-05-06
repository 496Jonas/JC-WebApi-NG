(function () {
    'use strict';

    angular
        .module('app')
        .factory('productResource', ['$resource', 'dataConstants', 'currentUser', productResource]);

    function productResource($resource, dataConstants, currentUser) {

        return $resource(dataConstants.SERVER_PATH + '/api/products/:id', null,
            {
                'query': {
                    isArray: true
                },
                'update': {
                    method: 'PUT',
                }
            });
    }
})();