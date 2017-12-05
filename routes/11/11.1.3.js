/**
 *@fileName: 11.1.3.js
 *@author: 吴晓阳
 *@time: 2017/12/4
 *@description: HMAC算法 将散列算法与一个密钥结合在一起
 */
var crypto = require('crypto');
var fs = require('fs');
var pem = fs.readFileSync('key.pem'); // 通过 openssl生成
var key = pem.toString('ascii');
var shasum = crypto.createHmac('sha1',key);
var s = fs.ReadStream('./11.1.1.js');
s.on('data',function (d) {
    shasum.update(d);
});
s.on('end',function () {
    var d = shasum.digest('hex');
    console.log(d);
});