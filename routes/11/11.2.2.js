/**
 *@fileName: 11.2.2.js
 *@author: 吴晓阳
 *@time: 2017/12/5
 *@description: 使用Gzip对象压缩文件
 */
var zlib = require('zlib');
var gzip = zlib.createGzip();
var fs = require('fs');
var inp = fs.createReadStream('test.txt');
var out = fs.createWriteStream('test.txt.gz');
inp.pipe(gzip).pipe(out); // 使用ReadStream对象的pipe方法读取test.txt文件中的数据并将它输出到Gzip对象中进行压缩，然后使用Gzip对象的pipe方法将压缩后的数据输出到writeStream对象
