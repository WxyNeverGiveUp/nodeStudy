/**
 *@fileName: 14.4.8.js
 *@author: 吴晓阳
 *@time: 2017/12/19
 *@description: 异常处理机制
 */
var express = require('express');
var app = express();
app.use(function (err,req,res,next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.get('/',function (req,res) {
    noneexists(); // 不存在的错误
    res.send('你好');
});
app.listen(1337,'127.0.0.1');