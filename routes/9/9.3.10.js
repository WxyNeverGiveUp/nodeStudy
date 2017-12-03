/**
 *@fileName: 9.3.10.js
 *@author: 吴晓阳
 *@time: 2017/12/3
 *@description: 主进程与子进程共享socket端口对象
 */
var http = require('http');
var cluster = require('cluster');
var net = require('net');
cluster.setupMaster({
    exec: '9.3.11.js'
});
var worker = cluster.fork();
var server = net.createServer();
server.on('connection',function (socket) {
   if(socket.remoteAddress !== '127.0.0.1'){
       worker.send('socket',socket);
       return;
   }
   socket.end('客户端请求被主进程处理');
});
server.listen(3000,'127.0.0.1');
worker.on('message',function (m,socket) {
    socket.end('子进程返回消息：' + m);
});