/**
 *@fileName: 12.4.4.js
 *@author: 吴晓阳
 *@time: 2017/12/6
 *@description: 使用interface对象逐行读取文件
 */
var readline = require('readline');
var fs = require('fs');
var file = fs.createReadStream('./message.txt');
var out = fs.createWriteStream('./anotherMessage.txt');
var index = 1;
out.write('第' + index.toString() + '行:');
index+=1;
var rl = readline.createInterface({
    input: file,
    output: out,
    terminal: true //需要实时写入
});
rl.on('line',function (line) {
    out.write('line'+index.toString() + ':');
    index+=1;
});