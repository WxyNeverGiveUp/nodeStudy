/**
 *@fileName: 8.1.11.js
 *@author: 吴晓阳
 *@time: 2017/11/26
 *@description: 使用parse方法解析url地址字符串
 */
var http = require('http'),
    url = require('url');
var server = http.createServer().listen(3000,'127.0.0.1');
server.on('request',function (req,res) {
   if (req.url !== '/favicon.ico'){
       res.write('<html><head><meta charset="utf-8"></head>');
       var url_parts = url.parse(req.url);
       switch (url_parts.pathname){
           case '/':
           case '/index.html':
               res.write('<body>您当前正在访问网站首页</body></html>');
               break;
           default:
               res.write('<body>你当前正在访问的页面是: '+ url_parts.pathname +'</body></html>');
       }
   }
   res.end();
});