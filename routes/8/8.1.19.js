/**
 *@fileName: 8.1.19.js
 *@author: 吴晓阳
 *@time: 2017/11/28
 *@description: http.serverResponse对象的close事件的使用示例
 */
var http = require('http');
var server = http.createServer(function (req,res) {
    if (req.url !== '/favicon.ico'){
        res.on('close',function () {
           console.log('连接中断了！');
        });
        setTimeout(function () {
            res.setHeader('Content-Type','text/html');
            res.write('<html><head><meta charset="utf-8" /></head>');
            res.write('你好');
            res.end();
        },5000);
    }
}).listen(3000,'127.0.0.1');