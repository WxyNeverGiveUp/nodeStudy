/**
 *@fileName: 9.3.8.js
 *@author: 吴晓阳
 *@time: 2017/12/3
 *@description: send方法的使用示例
 */
var cluster = require('cluster');
cluster.setupMaster({
    exec: '9.3.9.js'
});
var worker = cluster.fork();
worker.on('message',function (m) {
    console.log('父进程接收的消息为:',m);
    process.exit();
});
worker.send({
    username: 'wuxiaoyang'
});