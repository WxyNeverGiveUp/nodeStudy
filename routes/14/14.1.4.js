/**
 *@fileName: 14.1.4.js
 *@author: 吴晓阳
 *@time: 2017/12/16
 *@description: 设置路由，在路由中使用参数
 */
var express = require('express');
var http = require('http');
var app = express();
app.get('/index.html/:id/:name',function (req,res) { // : 后跟参数名 只能加一个:
    var str = "";
    // console.log(req);
    for (key in req.params){
        console.log(key);
        str+="<br>";
        str+="参数名："+key;
        str+=String.fromCharCode(9)+"参数值："+req.params[key];
    }
    res.send(str);
});
app.listen(1337,'127.0.0.1');