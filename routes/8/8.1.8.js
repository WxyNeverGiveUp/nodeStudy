/**
 *@fileName: 8.1.8.js
 *@author: 吴晓阳
 *@time: 2017/11/26
 *@description: 创建一个HTTP服务器，测试接收到客户端请求时候的事件
 */
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req,res) {
    if (req.url !== 'favicon.ico'){
        req.on('data',function (data) {
            console.log('服务器接收到的数据为：' + decodeURIComponent(data)); // 对encodeURIComponent函数编码的URI进行解码
            console.log('服务器接收到的数据为：' + data); // 默认是未解析的乱码
            res.write('服务器已经接收到了数据：' + decodeURIComponent(data));
        });
        req.on('end',function () {
           console.log('客户端请求的数据已全部接收完毕');
        });
    }
}).listen(3000,'127.0.0.1');