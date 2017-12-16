/**
 *@fileName: 14.1.1.js
 *@author: 吴晓阳
 *@time: 2017/12/15
 *@description: 使用express构建web应用程序 一个简单的express示例应用程序
 */
var express = require('express');
// var http = require('http');
var app = express();
app.get('/index.html',function (req,res) {
    res.writeHead(200,{
        'Content-Type':'text/html'
    });
    res.write('<head><meta charset="utf-8"></head>');
    // res.send('你好哦！');
    res.end('你好\n');
});
app.listen(1337,'127.0.0.1');