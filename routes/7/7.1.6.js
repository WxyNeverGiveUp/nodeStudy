/*创建了TCP服务器后，使用address方法来查看该服务器监听的地址信息*/
var net = require('net');
var server = net.createServer(function (socket) {
    console.log('客户端与服务器端连接已建立');
});
server.listen(3000,'localhost',function () {
   var address = server.address();
   console.log('被监听的地址信息为', address);
});