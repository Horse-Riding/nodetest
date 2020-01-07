var express = require('express');
var router = express.Router();

/* GET vip page. */
router.get('/list.html', function(req, res, next) {
	res.send('<h1>张三，李四，王小五</h1>');
});
router.get('/info', function(req, res, next) {
  	res.send('<h1>会员名：张三，年龄：18习惯：经常失踪</h1>');
});

module.exports = router;
