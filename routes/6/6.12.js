/*检查文件或者目录是否存在*/
var fs = require('fs');
fs.exists('./mess.txt',function (status) {  // status 为Boolean值 存在为true 不存在为false
    console.log(status); // =>true 存在 / false 不存在
   if (status){
       console.log('此文件存在哦');
   }
   else{
       console.log('此文件不存在哦！');
   }
});