import { Questions } from "../../collections/questions.js";

Template.quiz.onCreated(function(){
  Meteor.subscribe("Questions");
  Template.instance().onAnswer = new ReactiveVar(false);
  Template.instance().questionIndex = new ReactiveVar(0);
})

Template.quiz.helpers({
  "currentQuestion": function(){
      let index = Template.instance().questionIndex.get();
      let questions = Questions.find().fetch();
      if (questions.length <= index) {
          return;
      }
    let question = questions[index];
    for (let i = 0; i < question.answers.length; i++) {
        let answer = question.answers[i];
        question.answers[i] = {
            answer: answer,
            color: ""
        };
        if (Template.instance().onAnswer.get()) {
            let color = (answer == question.correctAnswer) ? "correctAnswer" : "incorrectAnswer";
            question.answers[i].color = color;
        }
    }
    console.log(question);
    return question;
  }
})

Template.quiz.events({
    'click #nextButton':function() {
        Template.instance().onAnswer.set(!Template.instance().onAnswer.get());
          if (! Template.instance().onAnswer.get()) {

        let index = Template.instance().questionIndex.get();
          Template.instance().questionIndex.set(index + 1);
        }
    }
})
