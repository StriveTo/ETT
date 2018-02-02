var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var UserModel = require("../model/user");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/log4ajax', function(req, res, next) {
	  var phone = req.body.phone;
	   var result = {
	  			code:1,
	  			message:"登陆成功"
	  	};
	  UserModel.find({phone:phone},(err,docs)=>{
	  	if(docs.length == 0){
	  		result.code = -101;
	  		result.message = "您的账户或密码错误"
	  	}
	  	res.json(result);
	  })
});
module.exports = router;
