/**
 *@fileName: 10.1.13.js
 *@author: 吴晓阳
 *@time: 2017/12/4
 *@description: 在domain对象中嵌套使用另一个domain对象
 */
var domain = require('domain');
var d1 = domain.create();
d1.name = 'd1';
d1.on('error',function (err) {
    console.log('d1对象捕获到了错误')
});
var d2 = domain.create();
d2.name = 'd2';
d2.on('error',function (err) {
    console.log('d2对象捕获到错误');
    console.log(err);
});
console.log('原始堆栈：');
console.log(domain._stack);
d1.run(function () {
    d2.run(function () {
        // d1.enter(); // 将d1推到栈顶，d1会捕获到错误
        // d1.exit(); // 将d1弹出栈，则d2也会被弹出
        console.log('终极堆栈！');
        console.log(domain._stack);
        throw '一个错误';
    });
});