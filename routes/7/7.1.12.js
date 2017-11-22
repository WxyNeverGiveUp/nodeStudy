/**
 *@fileName: 7.1.12.js
 *@author: 吴晓阳
 *@time: 2017/11/22
 *@description: 使用pipe方法将客户端发送的数据写入文件
 */
var net = require('net');
var fs = require('fs');
var file = fs.createWriteStream('./message.txt');
var server = net.createServer();
server.on('connection',function (socket) {
   socket.pipe(file);
});
server.listen(3000,'127.0.0.1');