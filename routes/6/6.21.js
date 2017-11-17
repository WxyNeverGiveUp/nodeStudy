/*截断文件*/
var fs = require('fs');
fs.truncate('./mess.txt',20,function (err) {
   if (err){
       console.log('对文件进行截断操作失败');
   }
   else{
       fs.stat('./mess.txt',function (err,stats) {
          console.log('文件的储存为'+ stats.size + '字节。');
       });
   }
});