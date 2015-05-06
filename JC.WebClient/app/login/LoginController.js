(function () {
    'use strict';

    var controllerId = 'LoginController';

    angular
        .module('app')
        .controller(controllerId, ['userAccount', 'currentUser', 'loginRedirect', registerController]);

    //registerController.$inject = ['$location'];

    function registerController(userAccount, currentUser, loginRedirect) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'loginController';
        vm.isLoggedIn = function () {
            return currentUser.getProfile().isLoggedIn;
        };
        vm.message = '';
        vm.userData = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        activate();

        function activate() { }

        vm.login = function () {
            vm.userData.grant_type = "password";
            vm.userData.userName = vm.userData.email;

            userAccount.login.loginUser(vm.userData,
                function (data) {
                    vm.message = '';
                    vm.password = '';
                    currentUser.setProfile(vm.userData.userName, data.access_token);
                    loginRedirect.redirectPostLogin();
                }, function (response) {
                    vm.password = '';
                    vm.message = response.statusText + '\r\n';
                    if (response.data.exceptionMessage) {
                        vm.message += response.data.exceptionMessage;
                    }
                    if (response.data.error) {
                        vm.message += response.data.error;
                    }
                });
        };
    }
})();
