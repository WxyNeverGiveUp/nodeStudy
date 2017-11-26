/**
 *@fileName: 8.1.2.js
 *@author: 吴晓阳
 *@time: 2017/11/26
 *@description: 在listen方法中指定服务器端开始监听时调用的回调函数
 */
var http = require('http');
var server = http.createServer(function (req,res) {
   // 暂时不指定接收到客户端请求时候的处理
}).listen(3000,'127.0.0.1',function () {
   console.log('服务器端开始监听了');
});