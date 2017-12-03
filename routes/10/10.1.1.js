/**
 *@fileName: 10.1.1.js
 *@author: 吴晓阳
 *@time: 2017/12/3
 *@description: domain模块的错误补货与assert的断言处理
 */
var fs = require('fs');
try{
    var data = fs.readFileSync('test.txt','utf8');
    console.log(data); // 在控制台输出
}
catch (ex){
    console.log(ex); // 打印出错误
}