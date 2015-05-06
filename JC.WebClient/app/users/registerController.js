(function () {
    'use strict';

    var controllerId = 'RegisterController';

    angular
        .module('app')
        .controller(controllerId, ['userAccount', registerController]);

    //registerController.$inject = ['$location'];

    function registerController(userAccount) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'registerController';
        vm.isLoggedIn = false;
        vm.message = '';
        vm.userData = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        activate();

        function activate() { }

        vm.registerUser = function () {
            vm.userData.confirmPassword = vm.userData.password;

            userAccount.registration.registerUser(vm.userData,
                function (data) {
                    vm.confirmPassword = '';
                    vm.message = "User registered.",
                    vm.login();
                },
                function (response) {
                    vm.isLoggedIn = false;
                    vm.message = response.statusText + '\r\n';
                    if (response.data.exceptionMessage) {
                        vm.message += response.data.exceptionMessage;
                    }
                    if (response.data.modelState) {
                        for (var key in response.data.modelState) {
                            vm.message += response.data.modelState[key] + '\r\n';
                        }
                    }
            });
    };

    vm.login = function () {

    };
}
})();
