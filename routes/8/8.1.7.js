/**
 *@fileName: 8.1.7.js
 *@author: 吴晓阳
 *@time: 2017/11/26
 *@description: 获取客户端请求信息，在文件中保存客户端请求信息
 */
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req,res) {
    if (req.url !== '/favicon.ico'){
        var out = fs.createWriteStream('./request.log');
        out.write('客户端请求所用的方法为：'+ req.method + '\r\n');
        out.write('客户端请求所用的url字符串为：'+ req.url + '\r\n');
        out.write('客户端请求头对象为：'+ JSON.stringify(req.headers) + '\r\n');
        out.write('客户端请求头对象为（字符串版本）：'+ req.headers + '\r\n'); // =>[object object]
        out.end('客户端请求所用的HTTP版本为：'+ req.httpVersion);
    }
    res.end();
}).listen(3000,'127.0.0.1');
