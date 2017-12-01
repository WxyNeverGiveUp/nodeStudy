/**
 *@fileName: 9.1.7.js
 *@author: 吴晓阳
 *@time: 2017/12/1
 *@description: 使用umask方法修改进程的文件权限掩码
 */
var oldmask,
    newmask = 0644;
oldmask = process.umask(newmask);
console.log('修改前的掩码：' + oldmask.toString(8) + ',修改后的掩码：' + newmask.toString(8));
console.log('当前运行时间：' + process.uptime());