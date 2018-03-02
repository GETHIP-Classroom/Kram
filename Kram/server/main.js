import { Profiles } from "../collections/profiles.js";
import { Questions } from "../collections/questions.js";

function createProfile(id) {
    if (Profiles.find({ userId: id }).count() > 0) {
        return;
    }
    let profile = {
        userId: id,
        coins: 0
    };
    Profiles.insert(profile);
}

Meteor.startup(function() {

    Accounts.onCreateUser(function(options, user) {
        if (options == null || user == null) {
            return null;
        }
        createProfile(user._id);
        if (options.profile) {
            user.profile = options.profile;
        }
        return user;
    });
    Accounts.onLogin(function(info) {
        createProfile(info.user._id);
    });

    Meteor.publish("Profiles", function() {
        return Profiles.find({ userId: this.userId });
    });
    Meteor.publish("Questions", function() {
        return Questions.find();
    });
    Meteor.methods({
        'addCoins':function(id, count) {
            let profile = Profiles.findOne({ userId: id });
            Profiles.update({ userId: id }, { $set: { coins: profile.coins + count } });
        }
    });
});
