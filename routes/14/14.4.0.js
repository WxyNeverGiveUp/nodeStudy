/**
 *@fileName: 14.4.0.js
 *@author: 吴晓阳
 *@time: 2017/12/18
 *@description: 中间件的demo
 */
var express = require('express');
var app = express();
app.use('/user/:id', function(req, res, next) { // 中间件1
    console.log('Request URL:', req.originalUrl);
    next();
}, function (req, res, next) { // 中间件2
    console.log('Request Type:', req.method);
    console.log('Params',req.params);
    next();
});
/*app.get('/user/:id',function (req,res) {
    res.writeHead(200,{
        'Content-Type': 'text/html'
    });
    res.write('<head><meta charset="utf-8"></head>');
    res.end('你好哦！');
});*/
// 第二个路由永远不会被调用因为没有next
app.get('/user/:id', function (req, res, next) {
    console.log('ID:', req.params.id);
    next();
}, function (req, res, next) {
    res.send('User Info');
});

// 处理 /user/:id， 打印出用户 id
app.get('/user/:id', function (req, res, next) {
    console.log('第二个路由'); // 不会被打印
    res.end(req.params.id);
});
app.listen(1337,'127.0.0.1');