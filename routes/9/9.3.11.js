/**
 *@fileName: 9.3.11.js
 *@author: 吴晓阳
 *@time: 2017/12/3
 *@description: 9.3.10的子模块
 */
process.on('message',function (m,socket) {
    if(m === 'socket'){
        socket.end('客户端请求被子进程处理');
        process.send('客户端请求被子进程处理',socket);
    }
});