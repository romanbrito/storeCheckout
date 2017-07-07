Product = new Mongo.Collection('product');
Product.helpers({
  category:function () {
    Category.findOne(this.categoryId)
  }
});
//hook with category