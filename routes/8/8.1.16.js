/**
 *@fileName: 8.1.16.js
 *@author: 吴晓阳
 *@time: 2017/11/28
 *@description: 使用addTrailers在响应数据的尾部追加一个头信息
 */
var http = require('http');
var server = http.createServer(function (req,res) {
    if (req.url !== '/favicon.ico'){
        res.writeHead(200,{
           'Content-Type': 'text/html',
           'Trailer': 'Content-MD5'
        });
        res.write('<html><head><meta charset="utf-8"/></head>');
        res.write('你好我是测试的！');
        res.addTrailers({
           'Cotent-MD5': '7895bf4b8828b55ceaf47747b4bca667'
        });
    }
    res.end();
}).listen(3000,'127.0.0.1');