/**
 *@fileName: 9.1.11.js
 *@author: 吴晓阳
 *@time: 2017/12/1
 *@description: SIGINT事件
 */
process.stdin.resume();
process.on('SIGINT',function () {
   console.log('接收到SIGINT信号');
});