/**
 *@fileName: 8.1.10.js
 *@author: 吴晓阳
 *@time: 2017/11/26
 *@description: url模块
 */
var url = require('url');
var str = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';
console.log(url.parse(str).href);
console.log(url.parse(str).protocol);
console.log(url.parse(str).slashes);
console.log(url.parse(str).host);
console.log(url.parse(str).auth); // 认证信息部分
console.log(url.parse(str).hostname);
console.log(url.parse(str).port);
console.log(url.parse(str).pathname);
console.log(url.parse(str).search);
console.log(url.parse(str).path);
console.log(url.parse(str).query);
console.log(url.parse(str).hash);
console.log(url.parse(str,true));