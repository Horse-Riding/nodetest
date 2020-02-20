var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 

mongoose.connect("mongodb://127.0.0.1:27017/news", function(err) {
	if (err) {
		throw err; // 如果有错误，则抛出错误
	} else {
		console.log('数据库连接成功');
	}
})
// 2 定义骨架schema
var listSchema = new mongoose.Schema({
	title: String,
	author: String,
	from_addr: String,
	content: String,
	time: String,
	hits: Number
})

// 3.创建模型model

var listModel = mongoose.model('list', listSchema, 'list');

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // 利用模型读取数据
	  res.send({"name":"田老师"});
}); 

/* GET home page. */
router.post('/list.html', function(req, res, next) {
	console.log(req);
  // res.render('index', { title: 'Express' });
  // 利用模型读取数据
  listModel.find().exec(function(err, data) {
	  res.send({
		  state: 1,
		  data: data,
		  message: '获取成功'
	  });
  });
}); 
// 添加数据
router.post('/add.html', function(req, res, next) {
	// console.log(req.body);
	// console.log(req.body.title);
  // 创建实例
  console.log(req.body);
  var list = new listModel();
  list = Object.assign(list, req.body);
  list.save(function() {
	  res.send({
		  state: 1,
		  message: '添加文章成功'
	  });
  })
}); 
// 删除指定id的数据
router.post('/del.html', function(req, res, next) {
  var id = req.body.id; // 接收GET方式传的ID值。
  // 通过Id找到数据
  listModel.findById(id).exec(function(err,data) {
	  // res.send(data);
	  data.remove(function(err) {
		  res.send({
			  state: 1,
			  message: '删除成功'
		  });
	  })
  })
}); 
// 修改指定id的数据
router.post('/modify.html', function(req, res, next) {
  var id = req.body._id; // 接收GET方式传的ID值。
  // 通过Id找到要被修改的对象
  listModel.findById(id).exec(function(err,data) {
	  // res.send(data);
	  data = Object.assign(data, req.body);
	  data.save(function(err) {
		  res.send({
			  state: 1,
			  message: '修改成功'
		  });
	  })
  })
}); 
module.exports = router;
