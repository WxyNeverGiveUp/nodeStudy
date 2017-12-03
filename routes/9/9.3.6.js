/**
 *@fileName: 9.3.6.js
 *@author: 吴晓阳
 *@time: 2017/12/3
 *@description: 设定子进程对象使用独立的标准输入/输出
 */
var cluster = require('cluster');
var http = require('http');
if (cluster.isMaster){
    cluster.setupMaster({
       silent:true
    });
    var worker = cluster.fork();
    worker.process.stdout.on('data',function (data) {
        console.log('接收到来自客户端的请求，目标地址为' + data)
    });
}
else{
    http.createServer(function (req,res) {
        if (req.url !== '/favicon.ico'){
            res.writeHead(200,{
               'Content-Type': 'text/html'
            });
            res.write('<head><meta charset="utf-8"></head>');
            res.end('你好\n');
            process.stdout.write(req.url);
        }
    }).listen(1337,'127.0.0.1');
}