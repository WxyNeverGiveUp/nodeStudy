/**
 *@fileName: 14.2.1.js
 *@author: 吴晓阳
 *@time: 2017/12/16
 *@description: 在路由中使用这则表达式
 */
var express = require('express');
var http = require('http');
var app = express();
app.get('/index.html/:id?/:name?',function (req,res) {
    var str = '';
    if(req.params.id){
        str+="ID参数值为："+req.params.id;
    }
    if(str!=""){
        str+="<br>";
    }
    else{
        str='无参数的请求';
    }
    if(req.params.name){
        str+="name参数值："+req.params.name;
    }
    res.send(str);
});
app.listen(1337,'127.0.0.1');