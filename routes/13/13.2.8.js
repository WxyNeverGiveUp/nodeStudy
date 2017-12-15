/**
 *@fileName: 13.2.8.js
 *@author: 吴晓阳
 *@time: 2017/12/15
 *@description: 以数据流的方式处理查询数据
 */
var mysql = require('mysql');
var fs = require('fs');
var connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    database : 'test',
    user     : 'root',
    password : ''
});
var out = fs.createWriteStream('./message.txt');
out.on('error',function (err) {
    console.log('写入文件时发生错误，错误信息为：' +err.message);
    process.exit();
});
connection.connect(function (err) {
    if(err){
        console.log('与MySQL数据库建立连接失败');
    }
    else{
        console.log('与MySQL数据库连接成功');
        var query = connection.query('SELECT * FROM users');
         query
         .on('error',function (err) {
            console.log('读取数据失败,错误信息为：' + err.message);
            process.exit();
        })
        .on('fields',function (fields) {
            var str ='';
            fields.forEach(function (field) { // field每一个字段名
                str+=field.name;
                str+=String.fromCharCode(9);
            });
            out.write(str+'\r\n');
        })
        .on('result',function (row) {
            connection.pause();
            out.write(row.id+String.fromCharCode(9)+row.username+String.fromCharCode(9)+row.firstname+String.fromCharCode(9)+'\r\n',function (err) {
                connection.resume();
            });
        })
        .on('end',function () {
            console.log('数据全部写入完毕');
            connection.end();
        });

    }
});