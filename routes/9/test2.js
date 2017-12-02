/**
 *@fileName: test2.js
 *@author: 吴晓阳
 *@time: 2017/12/2
 *@description: test2.js文件中示例代码
 */
var fs = require('fs');
var out = fs.createWriteStream('./message.txt');
process.stdin.on('data',function (data) {
    out.write(data);
});
process.stdin.on('end',function (data) {
    process.exit();
});