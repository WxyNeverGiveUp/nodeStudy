/**
 *@fileName: 8.1.5.js
 *@author: 吴晓阳
 *@time: 2017/11/26
 *@description: 指定客户端与服务器端建立连接时的处理
 */
var http = require('http');
var server = http.createServer(function (req,res) {
    // 暂时不指定接收到客户端请求时的处理
}).listen(3000,'127.0.0.1');
server.on('connection',function (socket) {
   console.log('客户端已建立连接'); // 可以使用cmd的telnet 来检测是否建立连接
});