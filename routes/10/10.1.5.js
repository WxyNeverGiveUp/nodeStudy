/**
 *@fileName: 10.1.5.js
 *@author: 吴晓阳
 *@time: 2017/12/4
 *@description: 创建并使用domain对象 使用domain对象捕获错误
 */
var domain = require('domain');
var fs = require('fs');
var d = domain.create();
d.name = 'd1';
d.on('error',function (err) {
    console.error('%s捕获到错误！',d.name,err);
});
d.run(function () {
    process.nextTick(function () {
       setTimeout(function () {
            fs.open('non-existent file','r',function (err,fd) {
                if (err){
                    throw err;
                }
            });
       });
    },1000);
});