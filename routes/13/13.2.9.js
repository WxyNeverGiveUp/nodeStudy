/**
 *@fileName: 13.2.9.js
 *@author: 吴晓阳
 *@time: 2017/12/15
 *@description: 创建连接池
 */
var mysql = require('mysql');
var pool = mysql.createPool({
    host     : 'localhost',
    port     : 3306,
    database : 'test',
    user     : 'root',
    password : ''
});
pool.getConnection(function (err,connection) {
    if(err){
        console.log('与MySQL数据库建立连接失败');
    }
    else{
        console.log('与MySQL数据库建立连接成功');
        connection.query('SELECT * FROM users',function (err,rows) {
            if(err){
                console.log('查询数据操作失败');
            }
            else{
                console.log(rows);
                pool.end();
            }
        });
    }
});