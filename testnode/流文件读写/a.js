var fs = require('fs');
var stream = fs.createReadStream('./file3.txt');
// 当读取到内容就执行
stream.on('data', function(a) {
	console.log('______________________****************************');
	console.log(a.length);
	console.log(a.toString());
})
// 读取流的事件

// end 完成事件
stream.on('end', function () {
	console.log('文件读完了');
});
// error 读取流的错误事件
stream.on('error', function(err) {
	console.log('文件出错了');
});