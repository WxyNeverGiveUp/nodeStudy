/**
 *@fileName: 13.2.3.js
 *@author: 吴晓阳
 *@time: 2017/12/13
 *@description: 执行数据的基本操作
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    database : 'test',
    user     : 'root',
    password : ''
});
connection.connect(function (err) {
    if(err){
        console.log('与MySQL数据库建立连接失败。');
    }
    else{
        console.log('与MySQL数据库建立连接成功。');
        connection.query('INSERT INTO users SET ?',{username:'晓阳2',firstname:'吴'},function (err,result) {
            if(err){
                console.log('插入数据失败！');
            }
            else {
                connection.query(
                    'SELECT * FROM ??',
                    ['users'],function (err,result) {
                        if(err){
                            console.log('查询数据失败。');
                        }
                        else{
                            console.log(result);
                            connection.end();
                        }
                    });
            }
        });
    }
});