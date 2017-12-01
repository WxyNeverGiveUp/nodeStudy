/**
 *@fileName: 9.1.4.js
 *@author: 吴晓阳
 *@time: 2017/12/1
 *@description: 使用nextTick方法指定一个函数在一个同步方法执行完毕时候调用
 */
var fs = require('fs');
var finish = function () {
    console.log('文件读取完毕');
}
process.nextTick(finish);
console.log(fs.readFileSync('./9.1.1.js').toString());