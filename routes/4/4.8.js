/*访问并修改当前模块对象的ID属性值*/
var testModule1 = require('./4.7');
var testModule2 = require('./4.6');
var forever = require('forever');
console.log(module.id);
module.id = "foo";
console.log(module.id);
console.log(module.filename); // 属性值为当前模块文件的文件名
console.log(__filename); // 文件名
console.log(__dirname); // 目录名
console.log(module.loaded); // 属性为布尔值，当前属性值为false时 表示还没加载完毕
console.log(module.parent); // 属性值为当前模块的父模块对象，即调用当前模块的模块对象
console.log(module.children); // 属性值为数组，其中放了当前模块的所有子模块对象！