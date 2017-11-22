/*使用writeStream对象写入文件*/
var fs = require('fs');
var option = {
    flag: 'w',
    encoding: 'UTF8'
};
var file = fs.createReadStream('./message.txt');
var out = fs.createWriteStream('./anotherMessage.txt');
file.on('data',function (data) {
    out.write(data,function () {
       console.log('写入成功'); // 写入时候的回调函数
   });
});
out.on('open',function (fd) {
   console.log('文件的描述符为：'+ fd);
   console.log('需要被写入的文件已被打开');
});
file.on('end',function () {
   out.end('再见',function () {
      console.log('要写入的文件全部写完了');
      console.log('一共写入%d字节数据' + out.bytesWritten);
   });
});