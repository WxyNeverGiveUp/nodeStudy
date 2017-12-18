/**
 *@fileName: 14.3.4.js
 *@author: 吴晓阳
 *@time: 2017/12/18
 *@description: 使用delete方法接收客户端的delete请求
 */
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
    res.sendFile(__dirname + '/14.3.4.html');
});
app.delete('/index/delete',function (req,res) {
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
                // connection.query('SELECT * FROM users WHERE username =? AND firstname =?',[obj.username,obj.firstname],function (err,result) {
                //     if(err){
                //         str = '在服务器端MySQL数据库中查询数据失败';
                //     }
                //     else{
                //         if(result.length == 0){
                //             str= '数据库中无此人';
                //         }
                //         else{
                //
                //         }
                //     }
                // });
                connection.query('DELETE FROM users WHERE username =? AND firstname =?',[obj.username,obj.firstname],function (err,result) {
                    if(err){
                        str = '在服务器端MySQL数据库中删除数据失败';
                    }
                    else{
                        str = '在服务器端MySQL数据库中删除数据成功';
                    }
                    connection.release();
                    res.send(str);
                });
            }
        });
    });
});
app.listen(1337,'127.0.0.1');