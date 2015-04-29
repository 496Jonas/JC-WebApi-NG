(function () {
    'use strict';

    var commonModule = angular.module('common', []);

    commonModule.provider('commonConfig', function () {
        this.config = {

        };

        this.$get = function () {
            return {
                config: this.config
            }
        };
    });

    commonModule.factory('common', ['$q', '$rootScope', '$timeout', 'commonConfig', common]);

    function common($q, $rootScope, $timeout, commonConfig) {
        var service = {
            $broadcast: $broadcast,
            $q: $q,
            $timeout: $timeout,
            activateController: activateController,
        }

        return service;

        function activateController(promises, controllerId) {
            console.log('Common module controller activated' + controllerId);

        }
        return $q.all(promises).then(function (eventArgs) {
            console.log(eventArgs);
            var data = { controllerId: controllerId };
            $broadcast(commonConfig.config.controllerActivateSuccessEvent, data);
        });
    }

    function $broadcast() {
        return $rootScope.$broadcast.apply($rootScope, arguments);
    }

})();