/**
 *@fileName: 8.1.17.js
 *@author: 吴晓阳
 *@time: 2017/11/28
 *@description: 观察http.serverResponse对象的write方法返回值
 */
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req,res) {
    if(req.url !== '/favicon.ico'){
        fs.readFile('./8.1.16.js',function (err,data) {
           if (err){
               console.log('读取文件发生错误了');
           }
           else{
               var flag = res.write(data);
               res.write(data);
               console.log(flag); // 小文件返回true 大文件返回false
               res.end();
           }
        });
    }
}).listen(3000,'127.0.0.1');