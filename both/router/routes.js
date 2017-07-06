FlowRouter.route(['/','/home'],{
  action:function () {
    FlowLayout.render('layout',{sidebar:'sidebar',main:'home',cart:'cart'});
  }
});
FlowRouter.route('/register',{
  action:function () {
    FlowLayout.render('layout',{sidebar:'sidebar',main:'register',cart:'cart'});
  }
});
FlowRouter.route('/signin',{
  action:function () {
    FlowLayout.render('layout',{sidebar:'sidebar',main:'signin',cart:'cart'});
  }
});
FlowRouter.route('/signout',{
  action:function () {
    Meteor.logout(function (err) {
      if(!err){
        FlowRouter.go('/signin');
      }
    })
  }
});
FlowRouter.route('/checkout',{
  action:function () {
    FlowLayout.render('layout',{sidebar:'sidebar',main:'checkout',cart:'cart'});
  }
});
FlowRouter.route('/category/:categoryName',{
  subscriptions:function (params) {
    console.log("subscribe ", params);
    //make sure subscriptions exist
  },
  triggersEnter:function (params) {
    console.log("ENTER ", params);
    //check that user is logged in
  },
  triggersExit:function (params) {
    console.log("exit ", params);
    //check that there is no unsaved data
  },
  action:function () {
    FlowLayout.render('layout',{sidebar:'sidebar',main:'category',cart:'cart'});
  }
});
