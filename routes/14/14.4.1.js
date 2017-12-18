/**
 *@fileName: 14.4.1.js
 *@author: 吴晓阳
 *@time: 2017/12/18
 *@description: 调用自定义中间件
 */
var express = require('express');
var middleware = require('./middleware1');
var app = express();
app.use(middleware.setHeader());
app.get('/index',function (req,res) { // 默认是 '/'
    res.writeHead(res.statusCode,res.header);
    res.write(res.head);
    res.end('你好');
});
app.listen(1337,'127.0.0.1');