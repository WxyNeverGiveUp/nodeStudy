/**
 *@fileName: 7.2.3.js
 *@author: 吴晓阳
 *@time: 2017/11/23
 *@description: 使用setTTL方法的示例
 */
var dgram = require('dgram');
var server = dgram.createSocket('udp4');
server.on('message',function (msg,rinfo) {
   var buf = new Buffer('确认信息：' + msg);
   server.setTTL(128);
   server.send(buf,0,buf.length,rinfo.port,rinfo.address);
});
server.bind(3000,'127.0.0.1');