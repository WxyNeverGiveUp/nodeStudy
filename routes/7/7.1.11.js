/**
 *@fileName: 7.1.11.js
 *@author: 吴晓阳
 *@time: 2017/11/22
 *@description: end事件的回调函数的使用示例
 */
var net = require('net');
var server = net.createServer();
server.on('connection',function (socket) {
    socket.setEncoding('utf8');
    socket.on('data',function (data) {
       console.log(data);
       console.log('已经接收到%d字节数据',socket.bytesRead);
    });
    socket.on('end',function () {
       console.log('客户端连接被关闭');
    });
});
server.listen(3000,'127.0.0.1');