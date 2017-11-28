/**
 *@fileName: 8.1.15.js
 *@author: 吴晓阳
 *@time: 2017/11/28
 *@description: sendDate属性与statusCode属性的使用示例
 */
var http = require('http');
var server = http.createServer(function (req,res) {
    if (req.url !== '/favicon.ico'){
        res.statusCode = 404;
        res.sendDate = false;
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><meta charset="utf-8"/></head>');
        res.write('你好我是测试的！');
    }
    res.end();
}).listen(3000,'127.0.0.1');
/*状态码显示为404*/