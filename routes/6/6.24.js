/*使用watch方法监视文件*/
var fs = require('fs');
fs.watch('./message.txt',function (event,filename) {
    console.log(event);
    console.log(filename);
});