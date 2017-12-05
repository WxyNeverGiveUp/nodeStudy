/**
 *@fileName: 12.1.4.js
 *@author: 吴晓阳
 *@time: 2017/12/5
 *@description: 使用reverse方法反向解析IP地址
 */
var dns = require('dns');
dns.reverse('202.165.102.205',function (err,domain) {
    if(err){
        console.log(err);
    }
    else{
        console.log(domain); // 打印出域名
    }
});