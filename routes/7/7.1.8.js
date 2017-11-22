/*使用close方法拒绝信的客户端连接请求*/
var net = require('net');
var server = net.createServer(function (socket) {
    server.close(function () {
       console.log('TCP服务器被关闭')
    });
});
server.listen(3000,'127.0.0.1');
console.log('TCP服务器被创建'); //需要使用telnet测试连接