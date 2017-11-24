/**
 *@fileName: 7.1.22.js
 *@author: 吴晓阳
 *@time: 2017/11/23
 *@description: net模块中的类方法 三个类方法
 */
var net = require('net');
var input = '127.0.0.1';
console.log(net.isIP(input));
console.log(net.isIPv4(input));
console.log(net.isIPv6(input));