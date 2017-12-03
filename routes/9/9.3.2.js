/**
 *@fileName: 9.3.2.js
 *@author: 吴晓阳
 *@time: 2017/12/3
 *@description: 使用fork方法开启用于运行Node.js应用程序的子进程
 */
var cluster = require('cluster');
var http = require('http');
if (cluster.isMaster){
    cluster.fork();
    console.log('这段代码被运行在主进程中');
}
else{
    http.createServer(function (req,res) {
        if (req.url !== '/favicon.ico'){
            res.writeHead(200,{
               'Content-Type': 'text/html'
            });
            res.write('<head><meta charset="utf-8"></head>');
            res.end('你好\n');
            console.log('这段代码被运行在子进程中');
        }
    }).listen(3000,'127.0.0.1');
}
// 添加fork事件
cluster.on('fork',function (worker) {
    console.log('子进程' + worker.id + '被开启'); // => 子进程1被开启
});
// 添加online事件
cluster.on('online',function (worker) {
    console.log('已经接收到子进程' + worker.id + '的反馈信息');
});
// listening事件 在使用listen之后 触发
cluster.on('listening',function (worker,address) {
    // 事件回调函数代码
    console.log('子进程中的服务器开始监听，地址为：' + address.address + ":" + address.port); //=>127.0.0.1:3000
    console.log(worker);
    console.log(address);
});
