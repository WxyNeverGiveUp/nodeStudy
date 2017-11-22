/**
 *@fileName: 7.1.16.js
 *@author: 吴晓阳
 *@time: 2017/11/22
 *@description: 在事件超时后依然按顺序输出
 */
var net = require('net');
var file = require('fs').createWriteStream('./message.txt');
var server = net.createServer();
server.on('connection',function (socket) {
   socket.setTimeout(10*1000); // 10s
   socket.pause();
   socket.on('timeout',function () {
      socket.resume();
      socket.pipe(file);
   });
   socket.on('data',function (data) {
      socket.pause();
   });
});
server.listen(3000,'127.0.0.1');