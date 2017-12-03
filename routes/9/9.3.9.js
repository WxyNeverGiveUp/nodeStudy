/**
 *@fileName: 9.3.9.js
 *@author: 吴晓阳
 *@time: 2017/12/3
 *@description: 9.3.8.js的子程序
 */
process.on('message',function (m) {
    console.log('子进程接收到消息：',m);
    process.send({
        age:40
    });
});