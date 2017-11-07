/*使用removeAllListeners方法取消所有事件处理函数*/
var http = require('http');
var server = http.createServer();
var testFunction = function (req,res) {
  if (req.url !== "/favicon.ico"){
      console.log('发送响应完毕');
  }
};
// 为server服务器在接收到客户端请求时触发的request时间绑定多个事件处理函数
server.on('request',function (req,res) {
   if(req.url !== "/favicon.ico"){
       console.log('接收到客户端请求了哦！');
   }
});
server.on('request',function (req,res) {
    if(req.url !== "/favicon.ico"){
        console.log('req.url');
    }
    res.end();
});
server.on('request',testFunction);
/*只接受一个参数就是事件名*/
server.removeAllListeners('request');
server.on('request',function () {
   console.log('哈哈,我没被删除掉！');
});
server.listen(1337,'127.0.0.1');