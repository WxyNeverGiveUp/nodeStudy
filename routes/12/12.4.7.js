/**
 *@fileName: 12.4.7.js
 *@author: 吴晓阳
 *@time: 2017/12/6
 *@description: write方法
 */
var readline = require('readline');
var fs = require('fs');
var file = fs.createReadStream('./message.txt');
var out = fs.createWriteStream('./anotherMessage.txt');
var index = 1;
out.write('line'+index +':');
index+=1;
var rl = readline.createInterface({
    input:file,
    output:out,
    terminal:true
});
rl.on('line',function (line) {
    out.write('line'+index.toString()+':');
    index+=1;
});
file.on('end',function () {
    var buf = new Buffer('文件创建时间:' + (new Date().toLocaleString()));
    rl.removeAllListeners('line');
    rl.write('\r\n');
    rl.write(buf);
});