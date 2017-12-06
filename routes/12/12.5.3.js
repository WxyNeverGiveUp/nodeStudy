/**
 *@fileName: 12.5.3.js
 *@author: 吴晓阳
 *@time: 2017/12/6
 *@description: inspect方法 使用示例
 */
var util = require('util');
function testFunction(msg1,msg2) {
    return msg1 + msg2;
}
var parent = new Object();
parent.name = 'parent';
parent.func = testFunction;
var child1 = new Object();
child1.name = 'child1';
parent.child = child1;
var child2 = new Object();
child2.name = 'child2';
child1.child = 'child2';
var child3 = new Object();
child3.name = 'child3';
child2.child = 'child3';
console.log(util.inspect(parent,{showHidden:true,depth:3,colors:true})); // 专门查看对象