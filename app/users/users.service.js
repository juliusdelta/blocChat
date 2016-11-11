angular.module('blocChat')
  .factory('Users', function($firebaseArray, $firebaseObject, config) {

    firebase.initializeApp(config);
    
    var rootRef = firebase.database().ref();
    var ref = firebase.database().ref().child('/users');
   
    var users = $firebaseArray(ref);

    var Users = {
      getProfile: function(uid) {
        return $firebaseObject(ref.child(uid));
      },

      getDisplayName: function(uid) {
        return users.$getRecord(uid).displayName;
      },

      getGravatar: function(uid) {
        return '//www.gravatar.com/avatar/' + users.$getRecord(uid).emailHash;
      },

      all: users
    };

    return Users;
  })
