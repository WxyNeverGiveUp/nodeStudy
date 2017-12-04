/**
 *@fileName: 10.1.7.js
 *@author: 吴晓阳
 *@time: 2017/12/4
 *@description: 用于向HTTP服务器提交请求并发送数据的模块文件代码
 */
var http = require('http');
var options = {
    hostname: 'localhost',
    port: '3000',
    path: '/',
    method: 'POST'
};
var req = http.request(options,function (res) {
    res.setEncoding('utf8');
    res.on('data',function (chunk) {
        console.log('响应内容:' + chunk)
    });
});
req.write('你好。');
req.end('再见。');