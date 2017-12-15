/**
 *@fileName: 13.2.4.js
 *@author: 吴晓阳
 *@time: 2017/12/13
 *@description: 使用result参数值对象的insertid属性值获取插入数据的主键值
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
        console.log('与MySQL数据库建立连接失败');
    }
    else{
        console.log('与MySQL数据库建立连接成功');
        connection.query('INSERT INTO users SET ?', //单行插入 mysql的扩展语法
            {
                username:'三',
                firstname:'张'
            },function (err,result) {
                if(err){
                    console.log('插入数据失败');
                }
                else{
                    console.log('插入数据的ID值为%d',result.insertId);
                    connection.end();
                }
            });
    }
});