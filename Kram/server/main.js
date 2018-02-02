if(Meteor.isClient){
  Template.register.events({
    'submit form': function(event, template){
      prevent.preventDefault();
      var emailVar = template.find('#email').value;
      var passwordVar = template.find('#password').value;
      console.log("Form has been sumbitted");
    }
  })
}