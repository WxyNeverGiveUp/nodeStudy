/**
 *@fileName: 12.1.1.js
 *@author: 吴晓阳
 *@time: 2017/12/5
 *@description: Node.js中的其他模块 dns模块解析域名 使用resolve方法解析域名
 */
var dns = require('dns');
dns.resolve('www.google.com','A',function (err,addresses) {
    if(err){
        console.log(err);
    }
    else{
        console.log(addresses); // 打印出获取到的IPv4地址
    }
});

