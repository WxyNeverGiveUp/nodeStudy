/*件事文件或者目录*/
var fs = require('fs');
fs.watchFile('./message.txt',function (curr,prev) {
   if (Date.parse(prev.ctime) == 0){
       console.log('mess.txt文件悲怆推荐了');
   }
   else if (Date.parse(curr.ctime) == 0){
       console.log('message.txt文件被删除了');
   }
   else if (Date.parse(prev.mtime) != Date.parse(curr.mtime)){
       console.log('message文件被修改了');
   }
});
fs.watchFile('./message.txt',function (curr,prev) {
   if (Date.parse(curr.ctime) != 0){
       console.log(curr.ctime);
       console.log('message.txt文件的尺寸为' + curr.size + '字节');
   }
});