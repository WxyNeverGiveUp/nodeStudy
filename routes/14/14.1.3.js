/**
 *@fileName: 14.1.3.js
 *@author: 吴晓阳
 *@time: 2017/12/16
 *@description: 使用send方法的实例
 */
var express = require('express');
var http = require('http');
var app = express();
app.get('/index.html',function (req,res) {
    res.send('你好哦！');
});
app.listen(1337,'127.0.0.1');