/*文件流，流的基本概念*/
var fs = require('fs');
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('message.txt');

// 设置编码格式为UTF8
readerStream.setEncoding('UTF8');

// 处理事件流
readerStream.on('data',function (chunk) {
  data += chunk;
});
readerStream.on('end',function () {
   console.log(data);
});
readerStream.on('error',function (err) {
    console.log(err.stack);
});
console.log('输入完毕');
