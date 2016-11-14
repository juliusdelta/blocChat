angular.module('blocChat')
  .factory('Messages', function($firebaseArray) {

    var rootRef = firebase.database().ref();
    var ref = rootRef.child('channelMessages');

    console.log("loading messages..."); // DELETE

    return {
      forChannel: function(channelId){
        console.log("channel id = " + channelId) // DELETE
        return $firebaseArray(ref.child(channelId));
      }
    };
  });
