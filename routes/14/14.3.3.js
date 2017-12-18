/**
 *@fileName: 14.3.3.js
 *@author: 吴晓阳
 *@time: 2017/12/16
 *@description: put方法的使用示例
 */
var express = require('express');
var fs = require('fs');
var app = express();
var mysql = require('mysql');
var pool = mysql.createPool({
    host     : 'localhost',
    port     : 3306,
    database : 'test',
    user     : 'root',
    password : ''
});
app.get('/index',function (req,res) {
    res.sendFile(__dirname + '/14.3.3.html');
    // res.render('../../index'); // 重定向回来 不太好用
});
app.put('/index/insert',function (req,res) {
    req.on('data',function (data) {
        console.log(data.toString());
        var obj = JSON.parse(data.toString()); // 字符串中解析出对象
        console.log(obj);
        pool.getConnection(function (err,connection) {
            if(err){
                res.send('与MySQL数据库建立连接失败');
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
                    }
                    connection.release();
                    res.send(str);
                    console.log(result);
                });
            }
        });
    });
});
app.listen(1337,'127.0.0.1');