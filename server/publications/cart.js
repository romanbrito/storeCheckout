Meteor.publish('usercart',function(userid){
    return Cart.find({userId:this.userId}); //make sure is the logged in user not a passed id
});