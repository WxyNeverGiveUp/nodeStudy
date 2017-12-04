/**
 *@fileName: 10.1.3.js
 *@author: 吴晓阳
 *@time: 2017/12/3
 *@description: 使用uncaughtException事件来捕获任何未被处理的错误
 */
var http = require('http');
http.createServer(function (req,res) {
        if(req.url !== '/favicon.ico'){
            foo();
            res.writeHead(200,{
                'Content-Type': 'text/html'
            });
            res.write('<head><meta charset="utf-8"></head>');
            res.end('你好\n');
        }
}).listen(3000,'127.0.0.1');
process.on('uncaughtException',function (ex) { // 代替 try..catch 但是这是一种'粗鲁'的处理方式，客户端永远得不到服务器端的响应
    console.log('接收客户端请求时发生以下错误：');
    console.log(ex); // 打印出异常 不报错
});