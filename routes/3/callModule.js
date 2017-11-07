/*引用testModule.js模块文件*/
var haha = require('./testModule.js');
var testModule1 = require('./testModule');
var testModule2 = require('./testModule');
/*还可以使用require.resolve函数查询完整模块名*/
var fullName = require.resolve('http');
var fullName2 = require.resolve('./testModule');

// 加载模块是 会运行模块的每一行代码
// console.log(haha.haha); // 第一个haha代表第一行定义的haha 属性haha是testModule.js里暴露出来的属性haha
console.log(haha.testString); // 这次暴露的testString
/*加载同一个模块并多次执行！*/
// testModule1.outputTestVar();
// testModule2.outputTestVar();
// testModule2.outputTestVar('吴晓阳');
// testModule2.outputTestVar('有钱人');
console.log('打印http的完整模块名：'+ fullName);
console.log('打印出一个文件模块，模块名为：' + fullName2);