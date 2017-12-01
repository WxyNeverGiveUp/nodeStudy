/**
 *@fileName: 9.1.8.js
 *@author: 吴晓阳
 *@time: 2017/12/1
 *@description: hrtime 方法的使用示例
 */
var fs = require('fs');
var time = process.hrtime();
var data = fs.readFileSync('./9.1.5.js');
var diff = process.hrtime(time);
console.log('读取文件操作耗费%d纳秒',diff[0] + diff[1]);