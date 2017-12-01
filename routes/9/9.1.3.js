/**
 *@fileName: 9.1.3.js
 *@author: 吴晓阳
 *@time: 2017/12/1
 *@description: 进程对象的方法和事件
 */
console.log(process.memoryUsage()); // 返回一个对象 查看内存使用情况
function foo() {
    console.log('foo');
}
setTimeout(foo,0);
console.log('bar');
function foo2() {
    console.log('foo2');
}
process.nextTick(foo2); // 等同于 setTimeout(,0)
console.log('bar2');