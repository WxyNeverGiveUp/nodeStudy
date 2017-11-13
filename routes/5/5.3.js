/*创建buffer对象*/
var buf = new Buffer("哈哈，真的好好吃","utf8");
console.log(buf);
console.log(buf.toJSON());
var buf2 = new Buffer(10);
buf2.write("我曹 ！合适的话发电公司 是逗号分隔",0,10,"utf8");
console.log(buf2);
console.log("buf2的长度为" + buf2.length);
var buf2ToStr = buf2.toString();
console.log(buf2ToStr);