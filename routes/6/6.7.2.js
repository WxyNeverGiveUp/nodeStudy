/*join方法*/
var fs = require('fs');
var path = require('path');
var myPath = path.join(__dirname,'testSync'); // 返回字符串参数路径
console.log(myPath);
var file = fs.createReadStream(myPath + '/test.txt');
file.on('data',function (data) {
   console.log(data.toString());
});