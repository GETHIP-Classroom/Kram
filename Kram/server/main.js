import { Profiles } from "../collections/profiles.js";

Meteor.startup(function() {
    Meteor.publish("Profiles", function() {
        return Profiles.find({ userId: this.userId });
    });
});