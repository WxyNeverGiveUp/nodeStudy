/*创建并使用模块对象*/
var Foo = require('./4.3');
var myFoo = new Foo("吴晓阳",20);
console.log('获取修改前的私有变量的值：');
console.log(myFoo.GetName());
console.log(myFoo.GetAge());

// 开始修改了哦！
console.log('修改私有变量值：');
myFoo.SetName("科科");
myFoo.SetAge(20);

// 修改过后的
console.log('修改过后的私有变量值：');
console.log(myFoo.GetName());
console.log(myFoo.GetAge());

console.log('获取修改前的公有变量值');
console.log(myFoo.name);
console.log(myFoo.age);

console.log('修改公有变量的值');
myFoo.name = 'job';
myFoo.age = 34;

console.log('获取修改后的公有变量的值');
console.log(myFoo.name);
console.log(myFoo.age);