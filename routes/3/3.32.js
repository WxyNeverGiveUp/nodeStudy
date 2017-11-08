/*使用listenerCount方法获取事件处理函数的数量*/
var http = require('http');
var events = require('events'); // 引用events模块
// 创建http服务器并将该服务器赋值给变量server
var server = http.createServer();
server.on('request',function (req,res) {
   if(req.url !== '/favicon.ico'){
       console.log('接收到客户端请求');
   }
});
server.on('request',function (req,res) {
   if (req.url !== '/favicon.ico'){
       console.log(req.url);
   }
   res.end();
});
server.on('request',function (req,res) {
   if (req.url!=='/favicon.ico'){
       console.log('发送响应完毕');
   }
});
server.listen(3000,'127.0.0.1');
/*listenerCount接收2个参数，一个是指定哪个对象，第二个是指定该对象的哪个事件的事件处理函数的数量*/
/*一定不要启动多个js文件 会发生端口占用*/
console.log(events.EventEmitter.listenerCount(server,'request')); // => 3