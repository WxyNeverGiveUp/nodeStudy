/*获取文件或目录的绝对路径*/
// realpath方法 cache 表示预先指定的路径
var fs = require('fs');
fs.realpath('./message.txt',function (err,resolvedPath) {
   if (err){
       throw err;
   }
   else{
       console.log(resolvedPath); // 会打印出文件的绝对路径
   }
});
// 同步获取
var resolvedPath = fs.realpathSync('./message.txt');
console.log(resolvedPath); // 同步获取
