

var fs = require('fs');
function deldir(p) {
	// 读取文件夹的内容
	var list = fs.readdirSync(p);
	// 遍历内容
	for (var i in list) {
		// list[i]是当前目录中每一个文件及文件夹名称
		// 拼接一个从当前目录能查找到的路径
		var path = p + "/" + list[i];
		// 获取到文件信息
		var info = fs.statSync(path);
		// 如果是文件删掉，如果是目录，从新调用自己
		if (info.isFile()) {
			fs.unlinkSync(path);
		} else {
			arguments.callee(path);
			// return deldir(path);
		}
	}
	fs.rmdirSync(p);
}
// 威力巨大别轻易删
deldir('./data');