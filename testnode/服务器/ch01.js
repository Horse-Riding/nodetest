// nodejs
var http = require('http');

// 创建服务器

var server = http.createServer();

// 监听request请求事件，当前请求事件发生时就返回数据

server.on('request', function(req, res) {
	res.write('<h1>Hello Node.js</h1>');
	res.write('<h1>Hello 111</h1>');
	res.end();
});

// 监听服务器的8082端口
server.listen(8082,function() {
	console.log('服务器已运行...');
});