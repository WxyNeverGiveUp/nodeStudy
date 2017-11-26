/**
 *@fileName: 8.1.4.js
 *@author: 吴晓阳
 *@time: 2017/11/26
 *@description: 指定服务器地址及端口已被占用时需要执行的处理，命令行执行2次就会触发error
 */
var http = require('http');
var server = http.createServer(function (req,res) {
   // 暂不指定接收到客户端请求时的处理
}).listen(3000,'127.0.0.1');
server.on('error',function (err) {
   if (err.code == 'EADDRINUSE'){
       console.log('服务器地址及端口已被占用。'); // 被占用时候的处理。
   }
});