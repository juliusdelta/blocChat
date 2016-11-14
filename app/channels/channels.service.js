angular.module('blocChat')
  .factory('Channels', function($firebaseArray, config) {
    console.log("attempting to load channels...")

    var rootRef = firebase.database().ref();
    var ref = rootRef.child('channels');

    var channels = $firebaseArray(ref);
    console.log("channels loaded")

    return channels;

    
  });
