// path 模块

var path = require('path');


// paht.normalize(p1);输出文件正式路径
// var p1 = '../../../path/../a./b/..c.html';
// console.log(path.normalize(p1)); // 格式化路径 ../../a/c.html

// 路径拼接
var p2 = './day02/hello/zs.html';
console.log(path.join('code', p2)); // code/day02/hello/zs.html

// 返回路径中的文件夹中部分
var p2 = './day02/hello/zs.html';
console.log(path.dirname('code', p2)); // 

// 返回路径中的文件部分
var p2 = './day02/hello/zs.html';
console.log(path.basename('code', p2)); // 

// 返回路径中的拓展名
var p2 = './day02/hello/zs.html';
console.log(path.extname('code', p2)); // html

// 解析路径 返回路径中的每个部分

var p2 = './day02/hello/zs.html';
console.log(path.parse(p2)); // 
