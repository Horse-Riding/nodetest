
var http = require('http');
var fs = require('fs');
var server = http.createServer();
var path = require('path');
server.on('request', function(req, res) {
	// res.write('<h1>Hello Node.js</h1>');
	// res.write('<h1>Hello 111</h1>');
	console.log(req.url);
	if (req.url==='/') {
		req.url = '/index.html'; // 制作一个默认首页
	}

	var fn = './www' + req.url;
	var ext = path.extname(fn); // 拿到扩展名
	console.log(ext);
	var exts = {".html":"text/html",".css":"text/css",".png":'image/png'};
	fs.readFile(fn, function(err, data) {
		if (err) {
			res.writeHead(404, {"Content-Type": "text/html; charset=utf-8"});
			res.write('<p>404</p>');
			res.end();
		} else {
			res.writeHead(200, {"Content-Type": exts[ext] + "; charset=utf-8"});
			res.write(data);
			res.end();
		}
	});
	// if(req.url === '/' || req.url === './index.html') {
	// 	fs.readFile('./www/index.html', function(err, data) {
	// 		res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
	// 		res.write(data);
	// 		res.end();
	// 	})
	// }
	// if(req.url === '/css/index.css') {
	// 	fs.readFile('./www/css/index.css', function(err, data) {
	// 		res.writeHead(200, {"Content-Type":"text/css"});
	// 		res.write(data);
	// 		res.end();
	// 	})
	// }
});

server.listen(8083,function() {
	console.log('服务器已运行...');
});