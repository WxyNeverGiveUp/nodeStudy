/*creatServer方法与listen方法的简单使用示例*/
var net = require('net');
var server = net.createServer(function (socket) {
   console.log('客户端与服务器端连接已经开始了');
   console.log(socket);
    // 在cmd输入 telnet localhost 3000 会建立主机到localhost的连接
});
server.listen(3000,'localhost',function () {
   console.log('服务器端开始监听');
});