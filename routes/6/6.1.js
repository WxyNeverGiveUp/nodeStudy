/*同步方法与异步方法,使用fs模块实现所有有关文件及目录的创建*/
var fs = require('fs');
// 同步读取
var data = fs.readFileSync('./message.txt','utf8');
console.log(data);// 等待操作返回结果，然后利用该结果


// 异步读取 读取完文件后立即调用
fs.readFile('./message.txt','utf8',function (err,data) {
   console.log(err); // =>若正确 返回null
   console.log(data);
});
