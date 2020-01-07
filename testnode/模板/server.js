var http = require('http');
var server = http.createServer();
var fs = require('fs');
function render(html, ip) {
	console.log(html);
	return html.replace('<%=ip%>', ip);
};
server.on('request',function(req,res) {
	console.log(req.url);
	var ip = req.socket.remoteAddress;
	res.writeHead(200, {"content-type":"text/html; charset=utf-8"});

	fs.readFile('./tmpl.html',function(err, html) {
		res.write(render(html.toString(), ip));
		res.end();
	})
});

server.listen(8082,function() {
	console.log('服务器已运行...');
});