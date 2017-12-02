/**
 *@fileName: 9.2.5.js
 *@author: 吴晓阳
 *@time: 2017/12/2
 *@description: 9.2.5.js文件中的代码
 */
process.on('message',function (m) {
    console.log('子进程接收到消息：',m);
    process.send({
        age:40
    });
});