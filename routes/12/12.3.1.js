/**
 *@fileName: 12.3.1.js
 *@author: 吴晓阳
 *@time: 2017/12/5
 *@description: 使用os模块获取操作系统的信息
 */
var os = require('os');
console.log('操作系统默认存放临时文件的目录:'+os.tmpDir());
console.log('CPU的字节序:'+os.endianness());
console.log('计算机名:'+os.hostname());
console.log('操作系统类型：'+os.type());
console.log('操作系统平台：'+os.platform());
console.log('CPU的构架：'+os.arch());
console.log('操作系统版本号：'+os.release());
console.log('系统当前运行时间:'+os.uptime());
console.log('系统的平均负载：'+os.loadavg());
console.log('系统的总内存量：'+os.totalmem());
console.log('系统的空闲内存了：'+os.freemem());
console.log('CPU的各种信息:',os.cpus());
console.log('所有网络连接接口：',os.networkInterfaces());