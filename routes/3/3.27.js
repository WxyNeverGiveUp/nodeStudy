/*使用once方法让时间处理函数只被执行一次*/
var http = require('http');
var server = http.createServer();
// 使用 once方法让事件处理函数被执行一次

var testFunction = function (req,res) {
    console.log('这是测试的哦！');
};
server.once('request',testFunction);
server.once('request',function (req,res) {
    if (req.url !== "/favicon.ico"){
        console.log(req.url);
    }
    res.end();
});
server.once('request',function (req,res) {
    if (req.url !== "/favicon.ico"){
        console.log('发送响应完毕');
    }
});

/*当对某个事件解除某个事件处理函数的时候，可以使用removeListener方法*/
server.removeListener('request',testFunction); // 不会执行testFunction函数

server.listen(1337,'127.0.0.1');