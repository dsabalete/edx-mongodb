var mongoose = require('mongoose');
var productSchema = require('./user');

var User = mongoose.model('User', productSchema);

var u = new User({
    profile: { username: 'dsabalete'}
});

modifyUserProfile(u, {
    picture: 'https://pbs.twimg.com/profile_images/598451420162072577/irvUvTgX.jpg'
});

// modifyUserData can ***only*** modify
// user.profile, not user.data
function modifyUserProfile(user, profile, callback) {
    user.profile = profile;
    user.save(function(error, user) {
        // handle result
    });
}