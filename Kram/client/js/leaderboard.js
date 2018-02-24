import { Profiles } from "../../collections/profiles.js";

Template.lbElement.onCreated(function() {
    Meteor.subscribe("Profiles");
});

Template.lbElement.helpers({
    coins: function() {
        return Profiles.findOne().coins;
    }
});

Template.lbElement.events({
    'click #coinButton':function(event) {
        Meteor.call('addCoins', Meteor.userId(), 10);
    }
});