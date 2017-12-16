/**
 *@fileName: 14.3.2.js
 *@author: 吴晓阳
 *@time: 2017/12/16
 *@description:
 */
/**
 *@fileName: 14.3.2.js
 *@author: 吴晓阳
 *@time: 2017/12/16
 *@description: 可以直接传送文件，不用再进行拼接了 res.sendFile
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
   res.sendFile(__dirname+'/14.3.2.html');
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