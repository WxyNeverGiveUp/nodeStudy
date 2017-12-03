/**
 *@fileName: 9.3.5.js
 *@author: 吴晓阳
 *@time: 2017/12/3
 *@description: 在多个子进程中运行HTTP服务器
 */
var cluster = require('cluster');
var http = require('http');
if (cluster.isMaster){
    cluster.fork(); // 创建第一个子进程
    cluster.fork(); // 创建第二个子进程
}
else{
    http.createServer(function (req,res) {
        if (req.url !== '/favicon.ico'){
            var sum = 0;
            for (var i=0;i<500000;i++){
                sum+=i
            }
            res.writeHead(200);
            res.write('客户端请求在子进程'+cluster.worker.id +'中被处理');
            res.end('sum='+sum);
        }
    }).listen(3000,'127.0.0.1');
}