/**
 *@fileName: 12.5.6.js
 *@author: 吴晓阳
 *@time: 2017/12/6
 *@description: 使用vm模块改变脚本运行运行环境
 */
var vm = require('vm');
console.log(vm.runInThisContext('1+1'));// 不可访问本地变量，属性，对象和方法
vm.runInThisContext("var obj={name:'wuxiaoyang'}"); // 但是在 runInThisContext方法里定义的可以用！
vm.runInThisContext("obj.func=function(){console.log(this.name);};");
vm.runInThisContext('console.log(obj.name);');
vm.runInThisContext('obj.func()');
