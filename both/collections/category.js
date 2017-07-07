Category = new Mongo.Collection('category');
Category.before.insert(function (userId,doc) {
  doc.createdAt = Date.now();
  doc.rating = 0;
});
// every time we save to category add date and rating