/**
 *@fileName: 10.2.1.js
 *@author: 吴晓阳
 *@time: 2017/12/4
 *@description: Node.js的断言处理 assert模块 使用repl
 */
var assert = require('assert');
var actualValue = 1;
var expcteValue = 2;
assert.equal(actualValue,expcteValue,'自定义的错误信息，默认抛出AssertionError'); // equal方法 ==
assert.notEqual(actualValue,expcteValue,'自定义的错误信息，默认抛出AssertionError'); // equal方法 !=
assert.strictEqual(actualValue,expcteValue,'自定义的错误信息，默认抛出AssertionError'); // strictEqual方法 ===
assert.notStrictEqual(actualValue,expcteValue,'自定义的错误信息，默认抛出AssertionError'); // notStrictEqual方法 !==
assert.ok(expcteValue,'判断此值是是否真');
assert(expcteValue,'比ok更简单的方法');
assert.deepEqual(actualValue,expcteValue,'深层次的比较');
assert.notDeepEqual(actualValue,expcteValue,'深层次的比较');
var i = 1;
assert.throws(function () {
    i = i+1;
    console.log("I'm an error");
},function (err) {
    return false;
},'自定义的错误信息'); // 控制，是否抛出在第一个参数值函数中指定抛出的异常，false贼抛出
assert.doesNotThrow(); // 与throws正好相反
