/**
 *@fileName: 10.1.11.js
 *@author: 吴晓阳
 *@time: 2017/12/4
 *@description: 观察不使用domain对象的exit方法时domain堆栈中的内容
 */
var domain = require('domain');
var d = domain.create();
d.on('error',function (err) {
    console.log('domain对象捕获到错误。');
    console.log(err);
});
console.log('原始堆栈：');
console.log(domain._stack);
d.run(function () {
    //d.exit(); // 弹出栈，栈还是[]，而且无法捕获错误
    console.log('运行domain对象后的堆栈内容');
    console.log(domain._stack);
    throw new Error('error');
});