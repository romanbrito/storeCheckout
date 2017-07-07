Template.sidebar.helpers({
  'categories':function(){
    return Category.find();
  }
});

//from what the server returned, what is displayed to user