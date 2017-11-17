/*创建与删除文件的硬链接*/
var fs = require('fs');
fs.link('./mess.txt','./mess的硬链接.txt',function (err) {
   if(err){
       console.log('创建硬链接失败');
   }
   else{
       console.log('创建硬链接成功');
   }
});
