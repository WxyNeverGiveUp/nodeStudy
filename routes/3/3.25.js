/*对同一个时间绑定多个事件处理函数*/
var http = require('http');
var server = http.createServer();
// 为server服务器在接收到客户端请求时触发的request时间绑定多个事件处理函数
/*默认情况下最多可以绑定10个事件处理函数，可以通过setMaxListeners方法修改最多可以绑定到时间处理函数的数量*/
// server.setMaxListeners(1); // 下面已经绑定了3个 超出了个数 会报错！
server.on('request',function req1(req,res) {
   if (req.url !== "/favicon.ico"){
     console.log('接收到客户端请求!')
   };
});
server.on('request',function req2(req,res) {
   if (req.url !== "/favicon.ico"){
       console.log(req.url);
   }
   res.end();
});
server.on('request',function req3(req,res) {
    if (req.url !== "/favicon.ico"){
        console.log('发送响应完毕！');
    }
});
server.listen(1337,"127.0.0.1");
/*listeners可以获取指定时间的所有时间处理函数*/
/*******
* pram 指定事件名
********/
 console.log(server.listeners('request'));


