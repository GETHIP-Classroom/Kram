if (Meteor.isClient) {
  Template.register.events({
      'submit form': function(event) {
          event.preventDefault();
          console.log("Form submitted.");
      }
  });
}