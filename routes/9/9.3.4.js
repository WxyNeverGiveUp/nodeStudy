/**
 *@fileName: 9.3.4.js
 *@author: 吴晓阳
 *@time: 2017/12/3
 *@description: 被9.3.3.js指定的子进程代码
 */
var http = require('http');
http.createServer(function (req,res) {
    if (req.url !== '/favicon.ico'){
        res.writeHead(200,{
           'Content-Type': 'text/html'
        });
        res.write('<head><meta charset="utf-8"></head>');
        res.write('你好\n');
        console.log('这段代码被运行在子进程中');
    }
}).listen(3000,'127.0.0.1');