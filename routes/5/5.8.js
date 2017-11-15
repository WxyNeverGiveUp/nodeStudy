/*Buffer对象与JSON对象之间的相互转换*/
var buf = new Buffer('我喜爱编程');
var str = JSON.stringify(buf); // 从一个对象中解析出字符串
var json =  JSON.parse(str); // 从一个字符串中解析出JSON对象
var copy = new Buffer(json);
console.log(copy.toString());