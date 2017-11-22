/*指定服务器地址以及端口已经被占用时候需要执行的处理*/
var net = require('net');
var server = net.createServer(function (socket) {
    console.log('客户端与服务器端连接已经开始了');
    console.log(socket);
    // 在cmd输入 telnet localhost 3000 会建立主机到localhost的连接
});
server.listen(3000,'localhost',function () {
    console.log('服务器端开始监听');
});
// 增添一个错误执行的处理
server.on('error',function (err) {
   console.log(err);
   if (err.code == 'EADDRINUSE'){
       console.log('服务器的地址及端口已经被占用');
   }
});