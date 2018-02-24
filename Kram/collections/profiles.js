import SimpleSchema from 'simpl-schema';

export const Profiles=new Mongo.Collection("Profiles");

profileSchema=new SimpleSchema({
    userId: {
        type: String
    },
    coins: {
        type: Number,
        min: 0
    }
});
Profiles.attachSchema(profileSchema);