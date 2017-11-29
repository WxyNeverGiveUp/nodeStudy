/**
 *@fileName: 8.2.1.js
 *@author: 吴晓阳
 *@time: 2017/11/28
 *@description: HTTP客户端,使用request方法想其他网站请求数据
 */
var http = require('http');
var options = {
    hostname: 'www.microsoft.com',
    port: 80,
    path: '/',
    method: 'GET'
};
var req = http.request(options,function (res) {
    console.log('状态码：' + res.statusCode);
    console.log('响应头：' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data',function (chunk) {
        console.log('响应内容：' + chunk);
    });
});
req.end();