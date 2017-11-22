/**
 *@fileName: 7.1.9.js
 *@author: 吴晓阳
 *@time: 2017/11/21
 *@description: 使用socket端口对象的address方法查看端口地址信息
 */
var net = require('net');
var server = net.createServer();
server.on('connection',function (socket) {
   var address = socket.address();
   console.log('socket的端口对象的地址信息为%j',address);
});
server.listen(3000,'127.0.0.1');