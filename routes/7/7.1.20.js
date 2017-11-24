/**
 *@fileName: 7.1.20.js
 *@author: 吴晓阳
 *@time: 2017/11/23
 *@description: 指定TCP客户端与TCP服务器建立连接10S之后关闭客户端连接
 */
var net = require('net');
var client = new net.Socket();
client.setEncoding('utf8');
client.connect(3000,'127.0.0.1',function () {
   console.log('成功连接到了服务器端！恭喜！');
   client.write('你好哦');
   // setTimeout(function () {
   //    client.end('10秒过去了，我要断连接了，88');
   // },10*1000);
});
client.on('data',function (data) {
    console.log('已接收到服务器端发送来的数据：' + data);
});
client.on('error',function (err) {
   console.log('与服务器连接或通信的过程中发生一个错误！错误对象如下%s',err);
   client.destroy(); // 销毁该端口
});