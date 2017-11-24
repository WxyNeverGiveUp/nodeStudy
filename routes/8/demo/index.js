/**
 *@fileName: index.js
 *@author: 吴晓阳
 *@time: 2017/11/24
 *@description: 服务器的主文件
 */
var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandlers.hello;
handle['/get'] = requestHandlers.get;

server.start(router.route,handle);