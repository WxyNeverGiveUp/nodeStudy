/*Buffer对象的write方法*/
var buf = new Buffer('你好，我叫');
buf.write('吴晓阳',12,9);
console.log(buf.toString());