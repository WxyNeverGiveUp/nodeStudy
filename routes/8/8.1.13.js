/**
 *@fileName: 8.1.13.js
 *@author: 吴晓阳
 *@time: 2017/11/28
 *@description: 使用headersSent(布尔值)属性查看writeHead方法响应头的发送时机
 */
var http = require('http');
var server = http.createServer(function (req,res) {
    if (req.url !== '/favicon.ico'){
        if (res.headersSent){
            console.log('响应头已发送');
        }
        else{
            console.log('响应头未发送');
        }
        res.writeHead(200,{
            'Content-Type': 'text/html'
        });
        if (res.headersSent){
            console.log('响应头已发送');
        }
        else{
            console.log('响应头未发送');
        }
        res.write('<html><head><meta charset="utf-8" /></head>');
        res.write('你好');
    }
    res.end();

}).listen(3000,'127.0.0.1');