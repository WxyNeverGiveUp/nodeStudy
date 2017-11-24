/**
 *@fileName: 7.1.19.js
 *@author: 吴晓阳
 *@time: 2017/11/23
 *@description: 使用tcp服务器对象close方法拒绝信的客户端连接请求
 */
var net = require('net');
var server = net.createServer();
server.on('connection',function (socket) {
   console.log('客户端与服务器端建立连接成功');
   socket.setEncoding('utf8');
   socket.on('data',function (data) {
      console.log('已接收到客户端发送的数据：' + data);
      socket.write('服务器端确认收到数据：' + data);
   });
   socket.on('error',function (err) {
      console.log('与客户端通信时发生了一个错误，错误对象如下：');
      console.log(err);
      socket.destroy();
   });
   socket.on('end',function () {
      console.log('客户端连接被关闭');
      server.unref();
   });
   socket.on('close',function (had_err) {
      if (had_err){
          console.log('是由于一个错误导致socket端口被关闭');
          server.unref();
      }
      else{
          console.log('socket端口被正确关闭');
      }
   });
   server.getConnections(function (err,count) {
      if (count == 2){
          server.close();
      }
   });
});
server.listen(3000,'127.0.0.1'); // 监听127.0.0.1的3000端口
server.on('close',function () {
   console.log('TCP服务器被关闭！');
});