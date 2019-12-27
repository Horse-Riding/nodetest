
var http = require('http');
var fs = require('fs');
// 爬取昵图网的图片信息

http.get('http://www.nipic.com/design/sheying/ertong/index.html',function(res) {
	// 定义一个变量用于存放一段html数据
	var data = '';
	// 流的方式读取数据
	res.on('data', function(a) {
		data += a.toString();
	})
	res.on('end', function() {
		// data就是当前网页的html内容
		// console.log(data);
		// 编写 正则表达式筛选img标签
		// var reg = /<a src="(.+?)" alt=".*?">/a;
		var reg = /<img src=".+?" data-src="(.+?)"  alt=".*?" \/>/img;
		// var res = reg.exec(data); // 此方法只能获取一次，指针下指一位
		var arr = [];
		var res;
		while(res=reg.exec(data)) {
			// var res = reg.exec(data);
		    arr.push(res[1]);
		}
		for (var i in arr) {
			// 闭包避免下载不能完成
			(function(){
				setTimeOut(function() {
					getImg(arr[i]);
				}, 1000);
			})(i);
		}
		fs.writeFileSync('./aaa.txt', arr);
	})
})
// http://pic259.nipic.com/pic/20191207/30383438_110016986088_4.jpg
// http://pic259.nipic.com/file/20191207/30383438_110016986088_2.jpg
function getImg(url) {
	// console.log('修改前', url);
	// console.log(url);
	var url = url.replace('pic/', 'file/').replace('4.jpg','2.jpg');
	console.log('修改后', url);
	http.get(url, function(res) {
		// 创建一个可写流
		var fn = new Date().getTime();
		var stream = fs.createWriteStream('./files/'+ fn + '.jpg');
		res.pipe(stream);
	})
}