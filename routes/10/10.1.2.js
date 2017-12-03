/**
 *@fileName: 10.1.2.js
 *@author: 吴晓阳
 *@time: 2017/12/3
 *@description: 使用try..catch机制尝试捕获异步方法中抛出的错误
 */
var http = require('http');
try{
    http.createServer(function (req,res) {
        if(req.url !== '/favicon.ico'){
            foo(); // undefined 报错
            res.write(200,{
                'Content-Type': 'text/html'
            });
            res.write('<head><meta charset="utf-8"></head>');
            res.end('你好');
        }
    }).listen(3000);
}
catch (err){
    console.log('接收客户端时发生以下错误：');
    console.log(err);
}