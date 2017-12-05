/**
 *@fileName: 11.2.3.js
 *@author: 吴晓阳
 *@time: 2017/12/5
 *@description: 使用Gunzip方法解压缩文件
 */
var zlib = require('zlib');
var gunzip = zlib.createGunzip();
var fs = require('fs');
var inp = fs.createReadStream('test.txt.gz');
var out = fs.createWriteStream('newTest.txt'); // 用于输出test.txt文件中的内容
inp.pipe(gunzip).pipe(out); // 用inp的pipe读取，gunzip的pipe将解压缩的数据输出到out