/*creatServer方法与listen方法的简单使用示例，这次测试error*/
var net = require('net');
var server = net.createServer(function (socket) {
    console.log('客户端与服务器端连接已经开始了');
    console.log(socket);
    // 在cmd输入 telnet localhost 3000 会建立主机到localhost的连接
});
server.listen(8900,'localhost',function () { // 使用一个被占用的端口
    console.log('服务器端开始监听');
});
server.on('error',function (err) {
   if (err.code == 'EADDRINUSE'){
       console.log('窗口被占用了！');
   }
});