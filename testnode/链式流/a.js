// 链式流
	//将多个管道连接起来，实现链式处理

// 实现链式流压缩文件
var fs = require('fs');

// 引入压缩
var zlib = require('zlib');

var s1 = fs.createReadStream('./file3.txt');
var s2 = fs.createWriteStream('.file3.txt.zip');

s1.pipe(zlib.createGzip())
	.pipe(s2);