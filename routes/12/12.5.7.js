/**
 *@fileName: 12.5.7.js
 *@author: 吴晓阳
 *@time: 2017/12/6
 *@description: runInNewContext方法 可一直指定沙箱
 */
var vm = require('vm');
var obj = {
    name: ""
};
vm.runInNewContext("name='wuxiaoyang'",obj);
vm.runInNewContext("age=40",obj);
console.log(obj);