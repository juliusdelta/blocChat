angular.module('blocChat')
  .factory('Channels', function($firebaseArray, config) {
    console.log("attempting to load channels...")

    firebase.initializeApp(config);

    var rootRef = firebase.database().ref();
    var ref = rootRef.child('/channels');

    var channels = $firebaseArray(ref);

    return channels;

    console.log("channels loaded");
  });
