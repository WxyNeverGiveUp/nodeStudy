/**
 *@fileName: 11.2.5.js
 *@author: 吴晓阳
 *@time: 2017/12/5
 *@description: 接收并解压缩HTTP服务器返回压缩数据的HTTP客户端
 */
var zlib = require('zlib');
var http = require('http');
var fs = require('fs');
var request = http.get({
    host: '127.0.0.1',
    path: '/',
    port: 3000,
    headers: {
        'accept-encoding': 'gzip,deflate'
    }
});
request.on('response',function (response) {
    var output = fs.createWriteStream('test2.txt');
    switch (response.headers['content-encoding']){
        case 'gzip':
            response.pipe(zlib.createGunzip()).pipe(output);
            break;
        case 'deflate':
            response.pipe(zlib.createInflate()).pipe(output);
            break;
        default:
            response.pipe(output);
            break;
    }
});