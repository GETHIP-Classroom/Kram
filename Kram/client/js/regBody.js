import { Profiles } from "../../collections/profiles.js";

Template.regBody.onCreated(function() {
    Meteor.subscribe("Profiles");
});

Template.regBody.helpers({
    coins: function() {
        return Profiles.findOne().coins;
    }
});

Template.regBody.events({
    'click #coinButton':function(event) {
        Meteor.call('addCoins', Meteor.userId(), 10);
    }
});