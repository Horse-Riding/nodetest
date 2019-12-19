// 写入流

var fs = require('fs');

// 创建一个可写流
var stream = fs.createWriteStream('./file4.txt');

// 写入数据
stream.write('张三失踪了\n');
stream.write('李四失踪了\n');
stream.write('王五失踪了\n');
stream.write('马六失踪了\n');
stream.end(); // 必须显示结束

// 写入流的事件
// finish 完成事件
stream.on('finish', function() {
	console.log('写完了');
});
// error 错误事件
stream.on('error', function() {
	console.log('出错了');
})