/**
 *@fileName: 14.4.2.js
 *@author: 吴晓阳
 *@time: 2017/12/18
 *@description: user方法中的path参数使用示例
 */
var express = require('express');
var middleware = require('./middleware1');
var app = express();
app.use('/static',middleware.setHeader()); // path为可选参数，指向引用的路径(哪个请求需要，就加载给那个请求)
app.get('/static',function (req,res) {
    if(res.head){
        res.writeHead(res.statusCode,res.header);
        res.write(res.head);
        res.write('你好')
    }
    res.end();
});
app.listen(1337,'127.0.0.1');