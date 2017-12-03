/**
 *@fileName: 9.3.7.js
 *@author: 吴晓阳
 *@time: 2017/12/3
 *@description: worker对象的online事件回调函数使用
 */
var cluster = require('cluster');
var http = require('http');
if (cluster.isMaster){
    var worker = cluster.fork();
    console.log('这段代码被运行在主程序中');
    // 运行子程序时
    worker.on('online',function () {
        console.log('已接收到子进程' + worker.id.toString() + '的反馈信息');
    });
    // listening事件
    worker.on('listening',function (address) {
        console.log('子进程中的服务器开始监听，地址为：' + address.address + ':' + address.port);
    });
}
else{
    http.createServer(function (req,res) {
        if (req.url !== '/favicon.ico'){
            res.writeHead(200,{
               'Content-Type': 'text/html'
            });
            res.write('<head><meta charset="utf-8"></head>');
            res.end('你好')
            console.log('这段代码被运行在子进程中');
        }
    }).listen(3000,'127.0.0.1');
}
