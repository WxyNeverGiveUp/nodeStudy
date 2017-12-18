/**
 *@fileName: 14.3.5.js
 *@author: 吴晓阳
 *@time: 2017/12/18
 *@description: 使用all方法接收客户端提交的各种请求 请求+修改
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
app.all('/index/:id(\\d+)',function (req,res,next) {
   pool.getConnection(function (err,connection) {
       if(err){
           res.send('与MySQL数据库建立连接失败');
       }
       else{
           connection.query('SELECT count(1) count FROM users WHERE id=?',[req.params.id],function (err,result) {
                if(err){
                    res.send('在服务器端MySQL数据库中查询数据失败');
                    connection.release();
                }
                else{
                    connection.release();
                    console.log(result);
                        if(result[0].count>0){
                            next();
                        }
                        else{
                            res.send('您没有操作数据表的权限');
                        }
                }
           });
       }
   });
});
app.get('/index/:id(\\d+)',function (req,res) {
     res.sendFile(__dirname + '/14.3.5.html');
});
app.post('/index/:id(\\d+)',function (req,res) {
    console.log(req);
     req.on('data',function (data) {
         var obj = JSON.parse(data.toString());
         pool.getConnection(function (err,connection) {
             if(err){
                 res.send('与MySQL数据库建立连接失败');
             }
             else{
                 var str;
                 connection.query('UPDATE users SET username=?,firstname=? WHERE id=?',[obj.username,obj.firstname,req.params.id],function (err,result) {
                    if(err){
                        str = '在服务器端MySQL数据库中更新数据失败';
                    }
                    else{
                        str = '在服务器端MySQL数据库中更新数据成功';
                    }
                    connection.release();
                    res.send(str);
                 });
             }
         });
     });
});
app.listen(1337,'localhost');