/**
 *@fileName: 10.1.10.js
 *@author: 吴晓阳
 *@time: 2017/12/4
 *@description: 观察domain堆栈中的内容
 */
var domain = require('domain');
var d1 = domain.create();
d1.name = 'd1';
var d2 = domain.create();
d2.name = 'd2';
console.log('原始堆栈：');
console.log(domain._stack);
// d1.on('error',function (err) {
//     console.log('************************d1发生错误：********************');
//     console.log(err);
// });
// d2.on('error',function (err) {
//     console.log('************************d2发生错误：********************');
//     console.log(err);
// });
d1.run(function () {
    console.log('d1对象：');
    console.log(d1);
    console.log('运行d1对象后的堆栈内容');
    console.log(domain._stack);
    foo1();
});
d2.run(function () {
    console.log('d2对象：');
    console.log(d2);
    console.log('运行d2对象后的堆栈内容');
    console.log(domain._stack);
    foo2();
});
