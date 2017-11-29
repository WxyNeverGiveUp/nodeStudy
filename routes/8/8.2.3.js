/**
 *@fileName: 8.2.3.js
 *@author: 吴晓阳
 *@time: 2017/11/29
 *@description: 使用get方法向其他网站请求数据，与request不同的是，不需要req.end()
 */
var http = require('http');
var options = {
    hostname: 'www.microsoft.com',
    port: '80',
    path: '/'
};
var req = http.get(options,function (res) {
    console.log('状态码：' + res.statusCode);
    console.log('响应头：' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data',function (chunk) {
        console.log('响应内容：' + chunk);
    });
});
req.setTimeout(1000,function () {
    req.abort();
});
req.on('error',function (err) {
    console.log('在请求数据过程中发生错误，错误代码为：'+err.code);
});