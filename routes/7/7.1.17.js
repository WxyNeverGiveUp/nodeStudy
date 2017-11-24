/**
 *@fileName: 7.1.17.js
 *@author: 吴晓阳
 *@time: 2017/11/22
 *@description: 创建TCP客户端 需要先执行服务器（限制性7.1.18.js） 后执行客户端
 */
var net = require('net');
var client = new net.Socket(); // 创建一个socket端口对象
client.setEncoding('utf8');
client.connect(3000,'localhost',function () {
   console.log('已连接到服务器端');
   client.write('你好。');
   client.end('再见，这是我说的最后一句话了'); // 结束连接
});
client.on('data',function (data) {
   console.log('已接收到服务器端发送的数据：' + data);
});
client.on('error',function (err) {
   console.log('连接异常，错误报告如下：');
   console.log(err);
   client.destroy(); // 连接异常后，立马销毁该端口对象。
});
client.on('end',function () {
   console.log('与服务器端的通信结束了');
});
