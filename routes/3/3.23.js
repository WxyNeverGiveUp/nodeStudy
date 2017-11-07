/*event模块用于实现各种事件的处理*/
var http =require('http'); // 引用 http 模块
var server = http.createServer(); // 创建http服务器并将改服务器赋值给变量server
// 为server服务器在接收到客户端请求是触发的request事件绑定时间处理函数
server.on('request',function (req,res) {
    if (req.url !== "/favicon.ico"){
        console.log(req.url); // 会输出客户端请求的目标地址
    }
    res.end();
});
server.listen(1337,'127.0.0.1');
/*访问时会产生根目录*/
