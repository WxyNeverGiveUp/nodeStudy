/*删除文件的硬链接*/
var fs = require('fs');
fs.unlink('./mess的硬链接.txt',function (err) {
   if(err){
       console.log('删除硬链接失败');
   }
   else{
       console.log('删除硬链接成功');
   }
});