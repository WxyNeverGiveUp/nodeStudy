/**
 *@fileName: 7.1.10.js
 *@author: 吴晓阳
 *@time: 2017/11/21
 *@description: data事件的回调函数的使用示例
 */
var net = require('net');
var server = net.createServer();
server.on('connection',function (socket) {
   socket.on('data',function (data) {
      console.log(data);
   });
});
server.listen(3000,'127.0.0.1');