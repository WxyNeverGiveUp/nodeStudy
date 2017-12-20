/**
 *@fileName: 14.4.9.js
 *@author: 吴晓阳
 *@time: 2017/12/19
 *@description: app的set方法
 */
var express = require('express');
var app = express();
app.set('title','HTML5在线');
console.log(app.get('title')); // 使用get方法获取到title变量并将其输出在控制台中