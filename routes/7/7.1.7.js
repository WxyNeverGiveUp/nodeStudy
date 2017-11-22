/*使用getConnections方法查看当前与TCP服务器建立连接的客户端数*/
var net = require('net');
var server = net.createServer(function () {
    server.getConnections(function (err,count) {
        console.log('当前存在%d个客户端连接',count);
        server.maxConnections = 2;
        console.log('TCP服务器的最大连接数为%d',server.maxConnections);
    });
});
server.on('error',function (err) {
   console.log('连接数超了');
});
server.listen(3000,'127.0.0.1');
console.log('TCP服务器被创建'); //需要使用telnet测试连接