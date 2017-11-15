/*复制缓存数据*/
var a = new Buffer('我喜爱编程');
var b = new Buffer(128);
b.fill(0); // 初始化Buffer b
console.log(b);
a.copy(b,10); // 把a的内容copy=>b中
console.log(a);
console.log(b);