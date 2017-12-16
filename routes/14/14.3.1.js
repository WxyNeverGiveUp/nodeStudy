/**
 *@fileName: 14.3.1.js
 *@author: 吴晓阳
 *@time: 2017/12/16
 *@description: 使用POST方法接收客户端提交的POST请求
 */
var express = require('express');
var fs = require('fs');
var querystring = require('querystring');
var app = express();
var mysql = require('mysql');
var pool = mysql.createPool({
    host     : 'localhost',
    port     : 3306,
    database : 'test',
    user     : 'root',
    password : ''
});
app.get('/index.html',function (req,res) {
    res.writeHead(200,{
        'Content-Type': 'text/html'
    });
    res.write('<head><meta charset="utf-8"><title>使用POST方法想服务器端提交数据</title></head>');
    var file = fs.createReadStream('14.3.1.html');
    file.pipe(res);
});
app.post('/index.html/insert',function (req,res) {
    console.log(req);
    req.on('data',function (data) {
        var obj = querystring.parse(data.toString()); // post请求不能使用req.params 因为是隐藏的 只能使用querystring
        pool.getConnection(function (err,connection) {
            if(err){
                res.send('与MySQL建立连接失败。');
            }
            else{
                var str;
                connection.query('INSERT INTO users SET ?',{
                    username:obj.username,
                    firstname:obj.firstname
                },function (err,result) {
                    if(err){
                        str = '在服务器端MySQL数据库中插入数据失败';
                    }
                    else{
                        str = '在服务器端MySQL数据库中插入数据成功';
                        connection.release();
                        res.send(str);
                    }
                });
            }
        });
    });
});
app.listen(1337,'127.0.0.1');