/**
 *@fileName: 11.1.1.js
 *@author: 吴晓阳
 *@time: 2017/12/4
 *@description: cryto模块
 */
var crypto = require('crypto');
console.log(crypto.getCiphers()); // getCiphers方法查看所有加密算法
console.log(crypto.getHashes()); // getHashes方法查看所有散列算法