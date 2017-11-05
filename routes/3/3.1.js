console.log('this is test string');
// 从第二个参数开始，义序输出所有字符串
console.log("%s","hoge","foo");
// 将对象转换为字符串后输出
console.log("%s","hoge",{foo:"foo"});
// 将数值转换为字符串后输出,从第二个参数开始，依序输出所有数值
console.log("%d",10,10.5);
//将字符串转换为数值，然后输出NaN
console.log("%d","hoge"); // =>NaN
// 输出百分号
console.log("%%","hoge");
// 用于各种运算符计算输出结果
console.log("2+2");
console.log(2/0); // =>Infinity
var a = 1;
var b = 2;
console.log(a+b);
const c = 1;
const d = 2;
console.log(c == d);
