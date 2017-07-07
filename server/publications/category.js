Meteor.publish('category',function () {
  return Category.find({});
});

//category is the name of the publication