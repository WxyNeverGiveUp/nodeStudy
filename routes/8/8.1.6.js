/**
 *@fileName: 8.1.6.js
 *@author: 吴晓阳
 *@time: 2017/11/26
 *@description: 使用setTimeout方法设置服务器超时时间
 */
var http = require('http');
var server = http.createServer(function (req,res) {
   res.end('再见');
}).listen(3000,'127.0.0.1');
server.setTimeout(10*1000,function (socket) {
   console.log('服务器超时了');
   console.log(socket);
});