/*从模块的外部访问这些变量、函数、对象*/
// 加载当前目录下的 4.1.js
var foo = require('./4.1.js');

console.log(foo.msg); // 通过foo模块对象的msg属性访问foo.js模块内的msg变量
console.log(foo.funcname());  // 通过foo模块对象的funcname属性访问foo.js模块内的funcname函数