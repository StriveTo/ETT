var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var User = new Schema({
	phone : Number,
	create_date : {type:Date,default:Date.now}
});
var UserModel = mongoose.model("user",User);
module.exports = UserModel; 
