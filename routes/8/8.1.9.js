/**
 *@fileName: 8.1.9.js
 *@author: 吴晓阳
 *@time: 2017/11/26
 *@description: 转换URL字符串与查询字符串 基于querystring模块
 */
var querystring = require('querystring');
var str = 'userName=wuxiaoyang&age=50&sex=male';
console.log(querystring.parse(str));
