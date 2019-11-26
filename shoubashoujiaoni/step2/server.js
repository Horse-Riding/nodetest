var http = require('http');
var path = require('path');
var fs = require('fs');
var url = require('url');

function staticRoot(staticPath, req, res) {
	var pathObj = url.parse(req.url, true);
	// 如果当前路径为/，则默认索引到index.html
	if(pathObj.pathname === '/') {
		pathObj.pathname += 'index.html'
	}
	var filePath = path.join(staticPath, pathObj.pathname)
	// 静态读取html
	// var fileContent = fs.readFileSync(filePath, 'binary')
	// console.log(fileContent)
	// res.write(fileContent, 'binary')
	// res.end()
	// 动态读取html
	fs.readFile(filePath, 'binary', function(err, fileContent) {
		if (err) {
			console.log('404')
			res.writeHead(404, 'not found')
			res.end('<h1>404 Not Found</h1>')
		} else {
			console.log('ok')
			res.writeHead(200, 'ok')
			res.write(fileContent, 'binary')
			res.end()
		}
	})
}
var server = http.createServer(function(req, res) {
	staticRoot(path.join(__dirname, 'static'), req, res)
})

server.listen(8080)
console.log('visit http://localhost:8080')