/**
 *@fileName: 10.1.14.js
 *@author: 吴晓阳
 *@time: 2017/12/4
 *@description: domain对象的销毁
 */
var domain = require('domain');
var d = domain.create();
d.dispose(); // 销毁domain对象
console.log(d); // => null