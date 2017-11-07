/*检测木块是佛为应用程序的主模块*/
var haha = require('./testModule.js');
console.log(haha.haha); // 第一个haha代表第一行定义的haha 属性haha是testModule.js里暴露出来的属性haha
console.log(haha.testString); // 这次暴露的testString
if (module === require.main){
    console.log('这个模块失主模块可以的');
}