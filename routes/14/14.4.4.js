/**
 *@fileName: 14.4.4.js
 *@author: 吴晓阳
 *@time: 2017/12/19
 *@description: basic中间件
 */
var express = require('express');
var basicAuth = require('basic-auth');
var app = express();
var auth = function(req, resp, next) {
    function unauthorized(resp) {
        // 认证框要求输入用户名和密码的提示语
        resp.set('WWW-Authenticate', 'Basic realm=Input User&Password');
        return resp.sendStatus(401);
    }

    var user = basicAuth(req);

    if (!user || !user.name || !user.pass) {
        return unauthorized(resp);
    }

    // 简单粗暴，用户名直接为User，密码直接为Password
    if (user.name === 'User' && user.pass === 'Password') {
        return next();
    } else {
        return unauthorized(resp);
    }
};
app.use(auth()); // basicAuth已经不存在了
app.get('/',function (req,res) {
    res.send('你好');
});
app.listen(1337,'127.0.0.1');