/*这是一个自定义模块文件*/
var testVar = 'this is a variable from testMoudle.js';
var testString = '哈哈，这次暴露的是testSring';
var outputTestVar = function outputTestVar(name) {
    console.log(testVar);
    console.log('这次不单单是打印相同的字符串，还打印' + name);
}
// console.log(testVar);
exports.haha = testVar;
exports.testString = testString;
exports.outputTestVar = outputTestVar;