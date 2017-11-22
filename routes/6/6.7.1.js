/*对路径进行操作*/
var fs = require('fs');
var path = require('path');
var myPath = path.normalize('./testSync//test//../');
console.log(myPath);
var file = fs.createReadStream( './' + myPath + 'test.txt');
file.on('data',function (data) {
   console.log(data.toString());
});