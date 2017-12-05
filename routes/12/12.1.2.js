/**
 *@fileName: 12.1.2.js
 *@author: 吴晓阳
 *@time: 2017/12/5
 *@description: resolve各种便捷方法 使用resolveMx方法解析域名
 */
var dns = require('dns');
dns.resolveMx('google.com',function (err,addresses) {
    if(err){
        console.log(err);
    }
    else{
        console.log(addresses);
    }
});