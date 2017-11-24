/**
 *@fileName: 7.2.4.js
 *@author: 吴晓阳
 *@time: 2017/11/23
 *@description: 实现广播与组播,使用setBroadcast 服务器端
 */
var dgram = require('dgram');
var server = dgram.createSocket('udp4');
server.on('message',function (msg) {
   var buf = new Buffer('已接收客户端发送的数据：' + msg);
   server.setBroadcast(true); // 设置可以广播
   // 在本例中，客户端需将端口号指定为41235
   server.send(buf,0,buf.length,41235,'192.168.1.255');
});
server.bind(41234,'192.168.1.100');