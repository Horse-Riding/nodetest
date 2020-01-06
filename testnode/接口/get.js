var http = require('http');

var server = http.createServer();

server.on("request", function(req, res) {
	// 通过req.url后面参数字符串的解析，分析出传的参数和值
	res.write(req.url);
	res.end();
});

server.listen(80, function() {
	console.log('服务器已运行');
})