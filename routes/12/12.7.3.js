/**
 *@fileName: 12.7.3.js
 *@author: 吴晓阳
 *@time: 2017/12/6
 *@description: writer属性值的使用示例
 */
var repl = require('repl');
var util = require('util');
function writer(obj) {
    return util.inspect(obj,{depth:1,colors:false});
}
function testFunc() {
    msg = 'message';
}
repl.start({
    // writer:writer,
    useGlobal:true,
    useColors:true
});
testFunc();