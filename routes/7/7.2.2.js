/**
 *@fileName: 7.2.2.js
 *@author: 吴晓阳
 *@time: 2017/11/23
 *@description: 创建简单的UDP客户端
 */
var dgram = require('dgram');
var message = new Buffer('你好');
var client = dgram.createSocket('udp4');
client.send(message,0,message.length,3000,'127.0.0.1',function (err,bytes) {
   if (err){
       console.log('发送数据失败！');
   }
   else{
       console.log('已发送%d字节的数据',bytes);
   }
});
client.on('message',function (msg,rinfo) {
   console.log('已接收服务器端发送的数据：%s',msg);
   console.log('服务器地址为%s',rinfo.address);
   console.log('服务器所用端口为%s',rinfo.port);
   client.close(); // 关闭客户端
});
client.on('close',function () {
    console.log('socket端口被关闭');
});