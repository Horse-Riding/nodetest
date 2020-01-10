var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 编写login.html路由
router.post('/login.html',function(req, res) {
	var username = req.body.username;
	var pwd = req.body.pwd;
	res.send('您传的用户名是:' + username + ',您传的密码是:' + pwd);
})
module.exports = router;
