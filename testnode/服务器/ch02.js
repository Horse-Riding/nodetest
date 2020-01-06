var http = require('http');

var server = http.createServer();

server.on('request', function(req, res) {
	res.write('<h1>Hello Node.js</h1>');
	res.write('<h1>Hello 111</h1>');
	res.end();
});

server.listen(8082,function() {
	console.log('服务器已运行...');
});