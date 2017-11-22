/*使用net模块实现基于TCP的数据通信*/
var net = require('net');
// 创建TCP服务器
var server = net.createServer(function (socket) {
   console.log('链接成功咯！');
   console.log(socket);
});
server.on('connection',function (socket) {
    console.log('链接成功咯！');
    console.log(socket);
});