/**
 *@fileName: 9.2.1.js
 *@author: 吴晓阳
 *@time: 2017/12/1
 *@description: 多个子进程，共享端口，使用spawn方法开启子进程
 */
var child_process = require('child_process');
var spawn = child_process.spawn;
console.log(spawn.toString());
// 父进程与子进程之间共享标准输入输出
spawn('prg',[],{
   stdio:'inherit'
});