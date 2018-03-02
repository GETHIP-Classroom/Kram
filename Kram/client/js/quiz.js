import { Questions } from "../../collections/questions.js";

Template.quiz.onCreated(function(){
  Meteor.subscribe("Questions");
})

Template.quiz.helpers({
  "currentQuestion": function(){
    return Questions.findOne();
  }
})
