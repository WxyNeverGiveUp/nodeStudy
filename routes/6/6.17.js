/*对文件或者目录执行其他的操作*/
// 移动文件或目录
var fs = require('fs');
fs.rename('./newMess.txt','./mess.txt',function (err) {
   if (err){
       console.log('移动文件夹或重命名失败');
   }else{
       console.log('移动文件或重命名成功');
   }
});