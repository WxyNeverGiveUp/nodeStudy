/*从指定位置处开始读写文件*/
var fs = require('fs');
var readOnly = 'r+'; // 单纯的读取文件
fs.open('./message.txt',readOnly,function (err,fd) {
   console.log(fd);
   var buf = new Buffer(255);
   // 一个汉字的utf编码是三个字节数据
   // read与write 都是基于open下打开的
   fs.read(fd,buf,0,9,0,function (err,bytesRead,buffer) {
      console.log(buffer.slice(0,bytesRead).toString());
   });
});
// 使用同步的方式读数据
fs.open('./message.txt',readOnly,function (err,fd) {
   console.log(fd);
   var buf = new Buffer(255);
   // 一个汉字的utf编码为三个字节数据
   var bytesRead = fs.readSync(fd,buf,0,9,3);
   console.log(bytesRead);
   console.log(buf.slice(0,bytesRead).toString());
});