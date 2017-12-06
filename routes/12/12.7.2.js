/**
 *@fileName: 12.7.2.js
 *@author: 吴晓阳
 *@time: 2017/12/6
 *@description: input属性值与output属性值的使用示例
 */
var net = require('net');
repl = require('repl');
net.createServer(function (socket) {
    repl.start({
       prompt: 'node via TCP socket>',
       input: socket,
       output: socket
    }).on('exit',function () {
        console.log('REPL运行环境退出。');
        socket.end();
    });
}).listen(3000,'127.0.0.1');