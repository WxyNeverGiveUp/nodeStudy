/**
 *@fileName: 14.4.6.js
 *@author: 吴晓阳
 *@time: 2017/12/19
 *@description: 使用cookieParser中间件
 */
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser()); // 使用中间件读cookie
app.get('/index',function (req,res) {
    res.sendFile(__dirname + '/14.4.6.html');
});
app.post('/index/cookie',function (req,res) {
    for(var key in req.cookies){
        res.write('cookie名：'+key);
        res.write(',cookie值：'+req.cookies[key]+'<br>');
    }
    res.end();
});
app.listen(1337,'127.0.0.1');