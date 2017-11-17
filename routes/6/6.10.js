/*读取目录*/
var fs = require('fs');
fs.readdir('./',function (err,files) {
   if(err){
       console.log('读取目录失败');
   }
   else{
       console.log(files); // =>由该目录中所有文件组成的数组
   }
});