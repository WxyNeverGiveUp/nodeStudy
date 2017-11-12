/*在命令行窗口中使用调试器，下面是被调试的实例脚本文件*/
console.log('hello,world');
function foo() {
    console.log('hello,foo');
    return 100;
}
var bar = 'this is a pen.';
var http = require('http');
var i = foo();
console.log(i);