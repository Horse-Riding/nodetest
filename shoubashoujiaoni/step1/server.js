var http = require('http');
var path = require('path');
var fs = require('fs');
var url = require('url');

function staticRoot(staticPath, req, res) {
	var pathObj = url.parse(req.url, true);
	
	var filePath = path.json(static, pathObj.pathname)
	var fileContent = fs.readFileSync(filePath,'binary')
	res.write(fileContent, 'binary')
	res.end()
}
var server = http.createServer(function(req, res) {
	staticRoot(path.resolve(__dirname, 'static'), req, res)
})

server.listen(8080)
console.log('visit http://localhost:8080')