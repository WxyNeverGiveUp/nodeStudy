/*创建与查看符号链接*/
var fs = require('fs');
fs.symlink('./test','./test的目录符号链接目录','dir',function (err) {
   if (err){
       console.log('为目录创建符号链接操作失败');
       console.log(err);
   }
   else{
       fs.symlink(__dirname + '/test/message.txt',__dirname + '/test/anotherMessage.txt','file',function (err) {
          if(err){
              console.log('为文件创建符号链接操作失败');
          }
          else{
              console.log('为文件创建符号链接操作成功');
          }
       });
   }
});