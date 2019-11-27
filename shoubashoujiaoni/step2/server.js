var http = require('http');
var path = require('path');
var fs = require('fs');
var url = require('url');

// 路由
var routes = {
	'/a': function(req, res) {
		res.end('match /a, query is:' + JSON.stringify(req.query))
	},
	'/b': function(req, res) {
		res.end('match /b')
	},
	'/a/c': function(req, res) {
		res.end('match /a/c')
	},
	'/search': function(req, res) {
		res.end('username=' + req.body.username + ',password=' + req.body.password)
	}
}


// 文件解析
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
	// staticRoot(path.join(__dirname, 'static'), req, res)
	routePath(req, res)
})

function routePath(req, res) {
	var pathObj = url.parse(req.url, true)
	// console.log(pathObj)
	var handleFn = routes[pathObj.pathname]
	if (handleFn) {
		req.query = pathObj.query
		var body = ''
		req.on('data', function(chunk) {
			body += chunk
		}).on('end', function() {
			req.body = parseBody(body)
			handleFn(req, res)
		})
	} else {
		staticRoot(path.resolve(__dirname, 'static'), req, res)
	} 
}
function parseBody(body) {
	console.log(1111);
	var obj = {}
	console.log(body);
	body.split('&').forEach(function(str) {
		obj[str.split('=')[0]] = str.split('=')[1]
	})
	return obj;
}
server.listen(8080)
console.log('visit http://localhost:8080')