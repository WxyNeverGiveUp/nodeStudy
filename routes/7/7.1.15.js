/**
 *@fileName: 7.1.15.js
 *@author: 吴晓阳
 *@time: 2017/11/22
 *@description: socket端口对象的pause方法与resume方法的使用示例
 */
var net = require('net');
var file = require('fs').createWriteStream('./message.txt');
var server = net.createServer();
server.on('connection',function (socket) {
    socket.pause();
    setTimeout(function () {
       socket.resume();
       socket.pipe(file);
    },30000);
    socket.on('data',function (data) {
       socket.pause();
       setTimeout(function () {
           socket.resume();
       },30000);
    });
});