/**
 *@fileName: 12.1.3.js
 *@author: 吴晓阳
 *@time: 2017/12/5
 *@description: 使用lookup方法查询IP地址
 */
var dns = require('dns');
dns.lookup('baidu.com',4,function (err,address) {
    if(err){
        console.log(err);
    }
    else{
        console.log(address);
    }
});