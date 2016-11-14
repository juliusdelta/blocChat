angular.module('blocChat')
  .controller('ProfileCtrl', function($state, md5, auth, profile) {
    var profileCtrl = this;

    profileCtrl.profile = profile;
    console.log(auth)

    profileCtrl.updateProfile = function () {
      console.log(auth.email)
      profileCtrl.profile.emailHash = md5.createHash(auth.email);
      profileCtrl.profile.uid = md5.createHash(auth.uid);
      profileCtrl.profile.$save().then(function () {
        $state.go('channels');
      });
    }
  });
