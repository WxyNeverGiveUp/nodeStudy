/*为模块类定义类变量或者类函数*/
var foo = {

};
foo.staticName = '';
// 定义类函数
foo.staticFunction = function () {
  console.log(foo.staticName);
};
module.exports = foo;