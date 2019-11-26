var http = require('http')

var server = http.createServer(function(request, response) {
	response.setHeader('Content-Type','text/html')
	response.write('<html><head><meta charset="utf-8" /></head>')
	response.write('<body>')
	response.write('<h1>你好</h1>')
	response.write('</body>')
	response.end()
})
console.log('open http://localhost:8080');
server.listen(8900)