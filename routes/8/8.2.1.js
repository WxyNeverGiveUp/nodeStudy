/**
 *@fileName: 8.2.1.js
 *@author: 吴晓阳
 *@time: 2017/11/28
 *@description: HTTP客户端,使用request方法想其他网站请求数据
 */
var http = require('http');
var options = {
    hostname: 'www.microsoft.com',
    port: 80,
    path: '/',
    method: 'GET'
};
var 