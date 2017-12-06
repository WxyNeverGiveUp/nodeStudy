/**
 *@fileName: 12.5.2.js
 *@author: 吴晓阳
 *@time: 2017/12/6
 *@description: debug、error、puts、print、log方法
 */
var util = require('util');
console.log(util.debug('message'));
console.log(util.error(['err1','err2']));
console.log(util.puts(['success1','success2']));
console.log(util.print(['success1','success2']));
console.log(util.log('sting'));