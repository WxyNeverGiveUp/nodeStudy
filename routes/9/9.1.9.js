/**
 *@fileName: 9.1.9.js
 *@author: 吴晓阳
 *@time: 2017/12/1
 *@description: 可能触发的事件exit
 */
process.on('exit',function () {
    console.log('Node.js进程被退出')
});
process.exit();