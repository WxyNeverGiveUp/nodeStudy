/**
 *@fileName: 7.2.1.js
 *@author: 吴晓阳
 *@time: 2017/11/23
 *@description: 使用dgram模块实现基于udp的数据通信,创建一个简单的UDP服务器
 */
var dgram = require('dgram');
var server = dgram.createSocket('udp4'); // 创建一个dup4的服务器
server.on('message',function (msg,rinfo) {
   console.log('已接收到客户端发送的数据：' + msg);
   console.log('客户端的地址信息为%j',rinfo);
   var buf = new Buffer('确认信息:'+msg);
   server.send(buf,0,buf.length,rinfo.port,rinfo.address);
   setTimeout(function () {
      server.unref(); // 允许当不存在与socket端口对象进行通信的客户端连接时应用程序被整除退出
   },10*1000);
});
server.on('listening',function () {
   var address = server.address();
   console.log('服务器开始监听。监听的地址信息为%j',address);
});
server.bind(3000,'127.0.0.1');