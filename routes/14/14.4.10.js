/**
 *@fileName: 14.4.10.js
 *@author: 吴晓阳
 *@time: 2017/12/19
 *@description: 应用程序实例对象的enable方法与enabled方法的使用示例
 */
var express = require('express');
var app = express();
console.log('在使用enable方法之前的变量值：');
console.log(app.enabled('trust proxy')); // => false
app.enable('trust proxy');
console.log('在使用enable方法之后的变量值：');
console.log(app.enabled('trust proxy')); // => true