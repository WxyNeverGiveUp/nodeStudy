/**
 *@fileName: 8.1.18.js
 *@author: 吴晓阳
 *@time: 2017/11/28
 *@description: setTimeout方法的使用实力
 */
var http = require('http');
var server = http.createServer(function (req,res) {
    if (req.url !== '/favicon.ico'){
        res.setTimeout(1000);
        res.on('timeout',function () {
            console.log('响应超时！');
        });
        setTimeout(function () { // js中的setTimeout方法
            res.setHeader('Content-type','text/html');
            res.write('<html><head><meta charset="utf-8" /></head>');
            res.write('你好');
            res.end();
        },2000);
    }
}).listen(3000,'127.0.0.1');