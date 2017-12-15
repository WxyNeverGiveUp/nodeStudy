/**
 *@fileName: 13.2.7.js
 *@author: 吴晓阳
 *@time: 2017/12/14
 *@description: 结合查询两张表中的所有数据
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    database : 'test',
    user     : 'root',
    password : ''
});
var sqlStr = 'SELECT genres.id,genres.name,books.id,books.genreid,books.name FROM genres INNER JOIN books ON' +
    ' genres.id=books.genreid';
var newSqlStr = 'SELECT genres.id,genres.name,books.id id1,books.genreid,books.name name1 FROM genres JOIN books ON' +
    ' genres.id=books.genreid'; // 避免字段覆盖问题的sql
// 建立连接
connection.connect(function (err) {
    if(err){
        console.log('与MySQL数据库建立连接失败');
    }
    else{
        console.log('与MySQL数据库建立连接成功');
        connection.query({
            sql:sqlStr,
            nestTables:true // 以2个对象输出
        },function (err,result) {
            if(err){
                console.log('查询数据失败');
            }
            else{
                console.log(result);
                connection.end();
            }
        });
    }
});