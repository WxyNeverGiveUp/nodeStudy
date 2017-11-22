/**
 *@fileName: 7.1.13.js
 *@author: 吴晓阳
 *@time: 2017/11/22
 *@description: 当pipe的方法为false时
 */
var net = require('net');
var file = require('fs').createWriteStream('./message.txt');
var server = net.createServer();
var option = {
  end: false
};
server.on('connection',function (socket) {
   socket.pipe(file,option);
   socket.on('end',function () {
      file.end('可以在补充一条数据');
   });
});
server.listen(3000,'127.0.0.1');