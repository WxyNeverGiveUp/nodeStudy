/*使用readFile方法读取文件*/
var fs = require('fs');
fs.readFile('./test.txt','utf8',function (err,data) {
   if (err){
       console.log('读取文件时发生错误');
   }
   else{
       console.log(data);
   }
});