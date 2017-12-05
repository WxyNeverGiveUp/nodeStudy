/**
 *@fileName: 11.2.4.js
 *@author: 吴晓阳
 *@time: 2017/12/5
 *@description: 返回解压数据的HTTP服务器
 */
var zlib = require('zlib');
var http = require('http');
var fs = require('fs');
http.createServer(function (request,response) {
        var raw = fs.createReadStream('test.txt');
        var acceptEncoding = request.headers['accept-encoding'];
        console.log(acceptEncoding);
        if(!acceptEncoding){
            acceptEncoding = '';
        }
        else if(acceptEncoding.match(/\bdeflate\b/)){ // 如果字段中包含deflate
            response.writeHead(200,{
                'content-encoding': 'deflate'
            });
            raw.pipe(zlib.createDeflate()).pipe(response);
        }
        else if(acceptEncoding.match(/\bgzip\b/)){
            response.writeHead(200,{
                'content-type': 'gzip'
            });
            raw.pipe(zlib.createGzip()).pipe(response);
        }
        else{
            response.writeHead(200,{});
            raw.pipe(response);
        }
}).listen(3000,'127.0.0.1');