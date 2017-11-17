/*查看或修改文件或目录的信息*/
var fs = require('fs');
fs.stat('./message.txt',function (err,stats) {
   console.log(stats); // 以数组的形式打印
});
fs.lstat('./message.txt',function (err,stats) {
   console.log(stats);
});
fs.lstatSync('./message.txt'); // 同步函数没有回调函数