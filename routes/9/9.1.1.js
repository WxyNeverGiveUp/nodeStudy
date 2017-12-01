/**
 *@fileName: 9.1.1.js
 *@author: 吴晓阳
 *@time: 2017/11/29
 *@description: process.stdin对象与process.stdout对象的使用示例
 */
process.stdin.resume();
process.stdin.on('data',function (chunk) {
   process.stdout.write('进程接收到数据：' + chunk);
});