/**
 *@fileName: 8.2.6.js
 *@author: 吴晓阳
 *@time: 2017/11/29
 *@description: 代理服务器制作示例
 */
var http = require('http');
var url = require('url');
var server = http.createServer(function (sreq,sres) {
    var url_parts = url.parse(sreq.url);
    var options = {
        host: 'www.amazon.cn',
        port: 80,
        path: url_parts.pathname,
        headers: sreq.headers
    };
    var creq = http.get(options,function (cres) {
        sres.writeHead(cres.statusCode,cres.headers);
        cres.pipe(sres);
    });
    sreq.pipe(creq);
});
server.listen(1337,'127.0.0.1');