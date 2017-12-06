/**
 *@fileName: 12.5.1.js
 *@author: 吴晓阳
 *@time: 2017/12/6
 *@description: 使用util模块
 */
var util = require('util');
var format1 = util.format('您输入了%d个参数，参数值分别为%s,%s,%s',3,'foo','bar','baz'); // 类似于c的 printf
var format2 = util.format('%s:%s','foo');
var format3 = util.format('%j','foo','bar','10',{foo:'FOO'});
console.log(format1);
console.log(format2); // => foo:%s
console.log(format3); // 直接按string打印
