/**
 *@fileName: 13.2.5.js
 *@author: 吴晓阳
 *@time: 2017/12/13
 *@description: 使用multipleStatements属性值同时执行多条语句查询
 */
var mysql = require('mysql');
var tableName = 'users';
var connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    database : 'test',
    user     : 'root',
    password : '',
    multipleStatements: true // 允许运行执行多条语句
});
connection.connect(function (err) {
    if(err){
        console.log('与MySQL数据库建立失败。');
    }
    else{
        console.log('与MySQL数据库建立成功。');
        insertData();
    }
});
function insertData() {
    var sqlStr = '';
    for(var i=1;i<5;i++){
        sqlStr+='INSERT INTO '+ tableName + '(username,firstname) values (' + connection.escape('用户名' + i.toString()) +','+ connection.escape('姓' + i.toString()) + ');';
    }
    connection.query(sqlStr,function (err,result) {
        if(err){
            console.log('插入数据失败');
        }
        else{
            updateData(); // 更新数据
        }
    });
}
function updateData() {
    connection.query('UPDATE '+tableName+' set firstname =? where username=?',['姓100','用户名2'],function (err,result) {
        if(err){
            console.log('删除数据失败');
        }
        else{
            deleteData();
        }
    });
}
function deleteData() {
    connection.query('DELETE FROM '+tableName+' WHERE username=?',['用户名3'],function (err,result) {
        if(err){
            console.log('删除数据失败');
        }
        else{
            queryData();
        }
    });
}
function queryData() {
    connection.query('SELECT * FROM '+tableName,function (err,result) {
        if(err){
            console.log('查询数据失败。');
        }
        else{
            console.log('最终查询结果如下：')
            console.log(result);
            connection.end();
        }
    });
}