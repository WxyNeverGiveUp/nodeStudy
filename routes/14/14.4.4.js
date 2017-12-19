/**
 *@fileName: 14.4.4.js
 *@author: 吴晓阳
 *@time: 2017/12/19
 *@description: basic中间件
 */
var express = require('express');
var app = express();
app.use(express.basicAuth('testUser','testPass'));
app.get('/',function (req,res) {
    res.send('你好');
});
app.listen(1337,'127.0.0.1');