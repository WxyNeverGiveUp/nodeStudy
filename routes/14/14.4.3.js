/**
 *@fileName: 14.4.3.js
 *@author: 吴晓阳
 *@time: 2017/12/18
 *@description: 在应用程序实例对象的get方法中使用自定义中间件函数
 */
var express = require('express');
var middleware = require('./middleware1');
var app = express();
// 不使用app.use
app.get('/',middleware.setHeader(),function (req,res) {
    res.writeHead(res.statusCode,res.header);
    res.write(res.head);
    res.write('你好');
    res.end();
});
app.listen(1337,'127.0.0.1');