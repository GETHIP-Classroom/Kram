FlowRouter.route("/",{
  name: "home",
  action:function(){
    BlazeLayout.render("main");
  }
});
FlowRouter.route("/programs",{
  name: "programs",
  action:function(){
    BlazeLayout.render("programs");
  }
});
FlowRouter.route("/about",{
  name: "about",
  action:function(){
    BlazeLayout.render("about");
  }
});
FlowRouter.route("/profiles",{
  name: "profiles",
  action:function(){
    BlazeLayout.render("profilePage");
  }
});
