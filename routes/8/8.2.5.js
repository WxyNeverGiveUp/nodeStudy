/**
 *@fileName: 8.2.5.js
 *@author: 吴晓阳
 *@time: 2017/11/29
 *@description: 用于发送数据的HTTP客户端
 */
var http = require('http');
var options = {
    hostname: '127.0.0.1',
    port: 3000,
    path: '/',
    method: 'POST'
};
var req = http.request(options,function (res) {
    res.on('data',function (chunk) {
       console.log('客户端收到的数据:' + chunk);
    });
    res.on('end',function () {
       console.log('Trailer头信息：%j',res.trailers);
    });
});
req.write('您好！');
req.end('再见！');