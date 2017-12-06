/**
 *@fileName: 12.5.4.js
 *@author: 吴晓阳
 *@time: 2017/12/6
 *@description: isArray方法 isRegExp方法 isDate方法 isError方法
 */
var util = require('util');
console.log('是不是数组：'+util.isArray([1,3,2]));
console.log('是不是正则：'+util.isRegExp(new RegExp('an')));
console.log('是不是date：'+util.isDate(new Date()));
console.log('是不是异常：'+util.isError(new Error()));