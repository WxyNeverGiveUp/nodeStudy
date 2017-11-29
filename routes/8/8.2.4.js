/**
 *@fileName: 8.2.4.js
 *@author: 吴晓阳
 *@time: 2017/11/29
 *@description: 向本地服务器请求数据-用于接收数据的HTTP服务器端
 */
var http = require('http');
var server = http.createServer(function (req,res) {
    if(req.url !== '/favicon.ico'){
        req.on('data',function (data) {
           console.log('服务器端接收到数据：'+data);
           // res.end();
            res.write('确认收到数据：'+data);
        });
        req.on('end',function (){ // 添加反馈，优化体验
            res.addTrailers({
               'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667',
            });
            res.end();
        });
    }
}).listen(3000,'127.0.0.1');