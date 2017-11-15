/*字符串的长度与缓存区的长度*/
var str = '我喜欢编程';
var buf = new Buffer(str);
console.log(str.length); // 字符串的长度
console.log(buf.length); // 缓存区的长度
console.log(str[2]); // =>'欢'
console.log(buf[2]); // =>返回第三个字节转化为整数的数据 '145'
/*字符串创建后不能改变，但是buf可以*/
str[2] = '爱';
console.log(str); // 结果不变
buf[2] = 0;
console.log(buf); // 已经改变 => 第三个字符改为00
/*buffer的数据共享内存区域，例如取一个buffer的子串，改变子串，整个buffer也随之改变*/
console.log(buf); // 修改好的！
var subBuf = buf.slice(2,4);
subBuf[0] = 12;
console.log(buf); // 第三个字节不同

