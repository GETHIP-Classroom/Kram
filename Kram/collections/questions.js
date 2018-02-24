export const Questions=new Mongo.Collection("Questions");

questionsSchema=new SimpleSchema({
    question: {
        type: String
    },
    answers: {
        type: [String]
    },
    correctAnswer: {
        type: String
    }
});
Questions.attachSchema(questionsSchema);
