/**
 *@fileName: 11.1.2.js
 *@author: 吴晓阳
 *@time: 2017/12/4
 *@description: 散列算法的使用示例
 */
var crypto = require('crypto');
var fs = require('fs');
var shasum = crypto.createHash('sha1');
var s = fs.ReadStream('./11.1.1.js');
s.on('data',function (d) {
    shasum.update(d);
});
s.on('end',function () {
    var d = shasum.digest('hex');
    console.log(d);
});