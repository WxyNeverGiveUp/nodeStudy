/**
 *@fileName: 14.2.2.js
 *@author: 吴晓阳
 *@time: 2017/12/16
 *@description: next方法使用示例
 */
var express = require('express');
var http = require('http');
var app = express();
app.get('/index.html/:id(\\d+)',function (req,res,next) {
    if(req.params.id>10){
        next();
    }
    else{
        res.send('id的参数值必须大于10');
    }
});
app.get('/index.html/:id(\\d+)',function (req,res) { // next必须使用相同的路由
    res.send('你好！');
});
app.listen(80,'127.0.0.1');