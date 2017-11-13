/*将模块定义为类*/
var _name, // 私有变量
    _age; // 私有变量
var name = '', // 公有变量
    age = 0; // 公有变量
// 模块对象的构造函数
var Foo = function (name,age) {
    _name = name;
    _age = age;
};
// 获取私有变量_name的变量值
Foo.prototype.GetName = function () {
  return _name;
};
// 设置私有变量_name的变量值
Foo.prototype.SetName = function (name) {
  _name = name;
};
// 获取私有变量_age的变量值
Foo.prototype.GetAge = function () {
  return _age;
};
// 设置私有变量_name的变量值
Foo.prototype.SetAge = function (age) {
  _age = age;
};
Foo.prototype.name = name;
Foo.prototype.age = age;
module.exports = Foo;