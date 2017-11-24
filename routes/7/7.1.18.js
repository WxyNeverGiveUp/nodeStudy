/**
 *@fileName: 7.1.18.js
 *@author: 吴晓阳
 *@time: 2017/11/23
 *@description: 创建TCP服务器的服务器端
 */
var net = require('net');
var server = net.createServer();
server.on('connection',function (socket) {
   console.log('客户端与服务器端连接已建立');
   socket.setEncoding('utf8');
   socket.on('data',function (data) {
       console.log('已接收到客户端发送的数据：' + data);
       socket.write('服务器端的确认数据为:' + data);
   });
   socket.on('error',function (err) {
       console.log('与客户端通信的过程中发生了一个错误,错误编码为%s',err.code);
       socket.destroy();
   });
   socket.on('end',function () {
       console.log('与客户端的通信结束了');
       server.unref(); // 当客户端连接全部关闭的时候 退出应用程序
   });
});
server.listen(3000,'localhost');