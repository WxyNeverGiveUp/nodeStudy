/**
 *@fileName: 12.2.1.js
 *@author: 吴晓阳
 *@time: 2017/12/5
 *@description: 使用punycode模块转换punycode编码 主要用于转换为dns服务器的用的punyode编码
 */
var punycode = require('punycode');
console.log(punycode.encode('吴晓阳')); // 转换为punycode编码
console.log(punycode.decode('irrq53bs48a')); // 解码
console.log(punycode.toASCII('www.吴晓阳.com')); // 直解析非英文
console.log(punycode.toUnicode('www.xn--irrq53bs48a.com')); //解码 只转换为地方语言域名
console.log(punycode.ucs2.encode([97,98,99])); // 参数为数组为字符串
console.log(punycode.ucs2.decode('abc')); // 解析字符串为数组