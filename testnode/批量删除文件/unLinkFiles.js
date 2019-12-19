
var fs = require('fs');

// 使用同步的方法删除文件及文件夹
function deldir(p) {
	console.log(p);
	var list = fs.readdirSync(p);
	list.forEach(function(v, i) {
		var fn = p + '/' + v;
		var stats = fs.statSync(fn);
		if(stats.isFile()) {
			// 如果是文件则删除
			fs.unlinkSync(fn);
		} else {
			// 如果是目录则调用函数自身，递归调用
			// arguments.callee(fn);
			return deldir(fn);
		}
	})
	// 删除空目录
	fs.rmdir(p);
}
// 批量删除同级目录下的data文件
deldir('./data');