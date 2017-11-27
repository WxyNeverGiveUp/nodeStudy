/**
 *@fileName: 8.1.12.js
 *@author: 吴晓阳
 *@time: 2017/11/26
 *@description: 发送服务器端的响应流 即res 使用http.serverResponse对象的writeHead方法设置响应头信息 配合8.1.12.html搭配nginx使用
 */
var http = require('http');
var server = http.createServer(function (req,res) {
    res.on('data',function (data) {
       console.log(data);
    });
    if (req.url !== '/favicon.ico'){
        res.writeHead(200,{
           'Content-Type': 'text/plain',
           'Access-Control-Allow-Origin': 'http://localhost'
        });
        res.write('<h1>你好</h1>');
    }
    res.end();
}).listen(3000,'localhost');