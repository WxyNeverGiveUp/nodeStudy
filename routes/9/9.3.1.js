/**
 *@fileName: 9.3.1.js
 *@author: 吴晓阳
 *@time: 2017/12/3
 *@description: 在多个子进程中运行Node.js应用程序的负载均衡的demo
 */
'use strict';

var cluster = require('cluster');
var http = require('http');
var cpuCount = require('os').cpus().length;

if (cluster.isMaster) {
    for (var i = 0; i < cpuCount; ++i) {
        cluster.fork();
    }
} else {
    http.createServer(function(req, res) {
        res.writeHead(200);
        res.end('hello world\n');
        console.log(cluster.worker.id);
    }).listen(8000);
}
