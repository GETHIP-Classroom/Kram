FlowRouter.route("/",{
  name: "home",
  action:function(){
    document.title = "Kram";
    BlazeLayout.render("main");
  }
});
FlowRouter.route("/programs",{
  name: "programs",
  action:function(){
    document.title = "Programs";
    BlazeLayout.render("programs");
  }
});
FlowRouter.route("/about",{
  name: "about",
  action:function(){
    document.title = "About";
    BlazeLayout.render("about");
  }
});
FlowRouter.route("/profiles",{
  name: "profiles",
  action:function(){
    document.title = "Profiles";
    BlazeLayout.render("profilePage");
  }
});
FlowRouter.route("/tips",{
  name: "tips",
  action:function(){
    document.title = "Tips";
    BlazeLayout.render("tips");
  }
});

FlowRouter.route("/leaderboard",{
  name: "leaderboard",
  action:function(){
    document.title = "Leaderboard";
    BlazeLayout.render("leaderboard");
  }
});

FlowRouter.route("/games",{
  name: "Games",
  action:function(){
    document.title = "Games";
    BlazeLayout.render("games");
  }
});

FlowRouter.route("/Matching",{
  name: "Matching",
  action:function(){
    document.title = "Matching";
    BlazeLayout.render("matchGame");
  }
});
