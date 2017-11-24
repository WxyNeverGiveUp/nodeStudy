/**
 *@fileName: 7.2.5.js
 *@author: 吴晓阳
 *@time: 2017/11/23
 *@description: 用于接收广播数据的udp客户端
 */
var dgram = require('dgram');
var client = dgram.createSocket('udp4');
client.bind(41235,'192.168.1.102');
var buf = new Buffer('您好');
client.send(buf,0,buf.length,41234,'192.168.1.100');
client.on('message',function (msg,rinfo) {
   console.log('已接收服务器端发送来的数据：%s',msg);
});