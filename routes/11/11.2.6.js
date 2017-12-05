/**
 *@fileName: 11.2.6.js
 *@author: 吴晓阳
 *@time: 2017/12/5
 *@description: 各种用于压缩或解压缩数据的方法 ,使用gzip方法压缩数据以及使用unzip方法解压缩被压缩的数据
 */
var zlib = require('zlib');
var fs = require('fs');
var out = fs.createWriteStream('compress.log');
var input = 'abcdefghijklmnopqrstuvwxyz';
zlib.gzip(input,function (err,buffer) { //先压缩
    if(!err){
        zlib.unzip(buffer,function (err,buffer) { // 后解压缩
            console.log(buffer.toString());
            out.write(buffer.toString());
        });
    }
});
