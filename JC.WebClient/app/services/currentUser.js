(function () {
    'use strict';

    angular
        .module('app')
        .factory('currentUser', currentUser);

    function currentUser(tokenStorage) {

        var USERKEY = 'utoken';

        var setProfile = function (username, token) {
            profile.username = username;
            profile.token = token;
            profile.isLoggedIn = true;
            tokenStorage.add(USERKEY, profile)
        };

        var getProfile = function () {
            return profile;
        };

        var removeProfile = function () {
            profile.username = '';
            profile.token = '';
            profile.isLoggedIn = false;
            tokenStorage.remove(USERKEY);
        };

        var initialize = function () {
            var user = {
                isLoggedIn: false,
                username: '',
                token: ''
            };

            var localUser = tokenStorage.get(USERKEY);
            if (localUser) {
                user.username = localUser.username;
                user.token = localUser.token;
                user.isLoggedIn = localUser.isLoggedIn;
            }
            return user;
        };

        var profile = initialize();

        return {
            setProfile: setProfile,
            getProfile: getProfile,
            removeProfile: removeProfile
        }
    }
})();