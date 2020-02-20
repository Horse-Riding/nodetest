var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 

mongoose.connect("mongodb://127.0.0.1:27017/app", function(err) {
	if (err) {
		throw err; // 如果有错误，则抛出错误
	} else {
		console.log('数据库连接成功');
	}
})
// 2 定义骨架schema
var appSchema = new mongoose.Schema({
	name: String,
	country: String,
	age: Number
})

// 3.创建模型model

var appModel = mongoose.model('app', appSchema, 'app');

// 

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // 利用模型读取数据
  appModel.find({}, function(err, data) {
	  res.send(data);
  });
}); 
module.exports = router;
