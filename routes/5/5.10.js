/*Buffer类的类方法*/
// isBuffer方法 用于判断一个对象是否为Buffer对象
var a = 'aaa';
console.log(Buffer.isBuffer(a)); // =>false

// byteLength方法 用于计算一个指定字符串的字节数
var b = '我爱编程';
console.log(b.length); // => 4
console.log(Buffer.byteLength(b)); // =>12

// concat方法 用于将几个Buffer对象结合创建为一个新的Buffer对象
var str1 = new Buffer('我');
var str2 = new Buffer('爱');
var str3 = new Buffer('编程');
var buf = Buffer.concat([str1,str2,str3]);
console.log(buf.toString()); // => 我爱编程

// isEncoding方法 用于检测一个字符串是否为一个有效的编码格式的字符串
var str4 = 'utf16le';
var str5 = 'utf16e';
console.log(Buffer.isEncoding(str4)); // =>true
console.log(Buffer.isEncoding(str5)); // =>false