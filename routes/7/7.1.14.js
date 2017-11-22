/**
 *@fileName: 7.1.14.js
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
   },3000);
});
server.listen(3000,'127.0.0.1'); // 输入 1 3 5 7和 2 4 6 8后 =>1357246812345678