/**
 *@fileName: 12.5.8.js
 *@author: 吴晓阳
 *@time: 2017/12/6
 *@description: createContext方法与runInContext方法
 */
var vm = require('vm');
var obj = {
    x:2
};
var context1 = vm.createContext(obj);
vm.runInContext('x=x+1',context1);
console.log(context1.x); // 3
var context2 = vm.createContext(obj);
vm.runInContext('x=x+2',context2);
console.log(context2.x); // 5