angular.module('blocChat')
    .factory('Auth', function($firebaseAuth, config) {

        firebase.initializeApp(config);
        var auth = $firebaseAuth()

        return auth
    });
