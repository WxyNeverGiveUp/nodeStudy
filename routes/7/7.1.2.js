/*创建了TCP服务器后，可以使用listen方法来监听端口号*/
var net = require('net');
var server = net.createServer(4000,'127.0.0.1');
/*TCP服务器对象的listening事件*/
server.on('listening',function () {
    // 回调函数代码
});