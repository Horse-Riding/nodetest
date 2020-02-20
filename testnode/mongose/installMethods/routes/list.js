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
var listSchema = new mongoose.Schema({
	name: String,
	age: Number
})

// 3.创建模型model

var listModel = mongoose.model('list', listSchema, 'list');

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // 利用模型读取数据
	  res.send({"name":"田老师"});
}); 

/* GET home page. */
router.get('/list.html', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // 利用模型读取数据
  listModel.find().exec(function(err, data) {
	  res.send(data);
  });
}); 
// 添加数据
router.get('/add.html', function(req, res, next) {
  // 创建实例
  var list = new listModel();
  list.name = "赵云";
  list.save(function() {
	  res.send('<h1>数据新增成功</h1>');
  })
}); 
// 删除指定id的数据
router.get('/del.html', function(req, res, next) {
  var id = req.query.id; // 接收GET方式传的ID值。
  // 通过Id找到数据
  listModel.findById(id).exec(function(err,data) {
	  // res.send(data);
	  data.remove(function(err) {
		  res.send('<h1>'+ id + '删除成功</h1>');
	  })
  })
}); 
// 修改指定id的数据
router.get('/modify.html', function(req, res, next) {
  var id = req.query.id; // 接收GET方式传的ID值。
  // 通过Id找到要被修改的对象
  listModel.findById(id).exec(function(err,data) {
	  // res.send(data);
	  data.name = '曹操';
	  data.save(function(err) {
		  res.send('<h1>'+ id + '修改成功</h1>');
	  })
  })
}); 
module.exports = router;
