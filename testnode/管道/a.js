// 管道
	//管道是nodejs流的实现机制，直接定义一个输出流，导出输入流
	// 输出流.pipe(输入流)
// 需求实现大文件的复制

var fs = require('fs');

var s1 = fs.createReadStream('./file3.txt');
var s2 = fs.createWriteStream('./file4.txt');

// 以流的方式实现大文件复制，读取一节存一节
s1.on('data', function (a) {
	s2.write(a);
});

s1.on('end', function() {
	s2.end();
	console.log('文件复制已完成');
})