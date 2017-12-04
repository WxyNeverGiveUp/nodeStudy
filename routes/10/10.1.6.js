/**
 *@fileName: 10.1.6.js
 *@author: 吴晓阳
 *@time: 2017/12/4
 *@description: 隐式绑定与显示绑定add方法示例
 */
var http = require('http');
var domain = require('domain');
http.createServer(function (req,res) {
    var reqd = domain.create();
    reqd.add(req);
    reqd.add(res);
    reqd.on('error',function (err) {
        res.writeHead(200);
        res.write('服务器端接收客户端请求时发生以下错误');
        res.end(err.message);
    });
    res.writeHead(200);
    // reqd.remove(req); // 可以用remove解除add绑定
    req.on('data',function (data) {
        foo(); // 不存在的函数
        res.write('你好。');
        res.end();
    });
}).listen(3000,'127.0.0.1');