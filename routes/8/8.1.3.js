/**
 *@fileName: 8.1.3.js
 *@author: 吴晓阳
 *@time: 2017/11/26
 *@description: 使用close方法关闭服务器
 */
var http = require('http');
var server = http.createServer(function () {
    // 暂时不指定接收到客户端请求时的处理
}).listen(3000,'127.0.0.1');
server.on('listening',function () {
    console.log('服务器端开始监听');
    server.close();
});
server.on('close',function () {
    console.log('服务器已经被关闭了！');
});
// error事件
server.on('error',function (err) {
   if (err.code == 'EADDRINUSE'){ // 当地址以及端口被占用时错误代码为E...
       console.log('地址及端口被占用');
   }
});