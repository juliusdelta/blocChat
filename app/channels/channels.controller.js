angular.module('blocChat')
  .controller('ChannelsCtrl', function($state, Auth, Users, profile, channels) {
    var channelsCtrl = this;

    channelsCtrl.profile = profile;
    channelsCtrl.channels = channels;

    channelsCtrl.getDisplayName = Users.getDisplayName;
    channelsCtrl.getGravatar = Users.getGravatar;

    channelsCtrl.logout = function() {
      Auth.$signOut();
      $state.go('home');
    }

    channelsCtrl.newChannel = {
      name: ''
    };

    channelsCtrl.createChannel = function() {
      channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(ref) {
        $state.go('channels.messages', {channelName: ref.key});
      });
    };
  });
