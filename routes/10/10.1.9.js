/**
 *@fileName: 10.1.8.js
 *@author: 吴晓阳
 *@time: 2017/12/4
 *@description: 绑定回调函数与拦截回调函数 intercept使用方法 不需要throw err 可以被直接获取
 */
var fs = require('fs');
var domain = require('domain');
var d = domain.create();
fs.readFile('./foo.txt',d.intercept(function (err,data) {
    console.log(data);
}));
d.on('error',function (err) { // 可以捕捉到bind绑定的回调函数抛出的异常
    console.log('读取文件时发生了以下错误');
    console.log(err);
});