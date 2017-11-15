/*Buffer对象与数值对象之间的相互转换*/
//read 读方法
var buf = new Buffer([0x00,0x10,0x20,0x30]);
console.log(buf.readUInt8(0)); //读取缓存区第一个字节处的无符号整数
console.log(buf.readUInt8(1)); //读取缓存区第二个字节处的无符号整数
console.log(buf.readUInt8(2)); //读取缓存区第三个字节处的无符号整数
console.log(buf.readUInt8(3)); //读取缓存区第四个字节处的无符号整数
console.log(buf.readUInt8(5,true)); //读取缓存区第五个字节处的无符号整数，设置为true时候，不会抛出错误 // =>undefined
//write 写方法
console.log(buf.writeUInt8(128,0)); // 在缓存区的第一个自接触些人8位无符号数128
console.log(buf.writeUInt8(255,4,true)); // 超出长度但是不会抛出异常 但是value超出范围时会抛出typeError异常