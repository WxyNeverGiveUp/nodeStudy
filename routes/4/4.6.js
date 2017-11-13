var foo = require('./4.5');
foo.staticName = 'static name';
foo.staticFunction();  // 打印出static name;
/*访问并修改当前模块对象的ID属性值*/
console.log(module.id); // => 默认时  '.'
module.id = '现在是我自己定义的id值';
console.log(module.id);