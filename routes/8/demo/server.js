/**
 *@fileName: server.js
 *@author: 吴晓阳
 *@time: 2017/11/24
 *@description: 创建HTTP服务器
 */
var http = require('http');
var url = require('url');

function start(route,handle) {
    function onRequest(request,response) {
        var urlObj = url.parse(request.url);
        var pathname = urlObj.pathname;
        var query = urlObj.query;
        console.log('Request for ' + pathname + ' recevied ' + ' query: ' + query);

        route(pathname,query,handle,response);
    }
    http.createServer(onRequest).listen(8888,'localhost');
    console.log('server has started');
}

exports.start = start;