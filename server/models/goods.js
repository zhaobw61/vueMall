//  商品列表
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  "productId":{type:String},
  "productName":String,
  "salePrice":Number,
  "productImage":String
})

module.exports = mongoose.model("Good",productSchema);
