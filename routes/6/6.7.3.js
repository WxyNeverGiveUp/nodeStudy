/*resolve方法*/
var fs = require('fs');
var path = require('path');
var myPath = path.resolve('testSync','test.txt');
console.log(myPath);
var file = fs.createReadStream(myPath);
file.on('data',function (data) {
   console.log(data); // 会打印出buffer对象
});