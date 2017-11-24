/**
 *@fileName: 7.1.21.js
 *@author: 吴晓阳
 *@time: 2017/11/23
 *@description: 使用socket端口对象的write方法发送小尺寸文件
 */
var net = require('net');
var server = net.createServer();
var fs = require('fs');
server.on('connection',function (socket) {
   console.log('客户端与服务器端连接已建立');
   socket.setEncoding('utf8');
   var readStream = fs.createReadStream('./7.1.19.js');
   readStream.on('data',function (data) {
      var flag = socket.write(data);
      console.log('write方法的返回值为：' + flag);
      console.log('缓存队列中当前缓存了%d字符',socket.bufferSize);
   });
   socket.on('data',function (data) {
       console.log('已接收客户端发送的数据：' + data);
   });
   socket.on('drain',function () {
       console.log('TCP缓存区中数据已全部发送');
   });
});
server.listen(3000,'127.0.0.1');