/**
 *@fileName: 13.2.6.js
 *@author: 吴晓阳
 *@time: 2017/12/13
 *@description: 执行存储过程 使用存储过程在users表中插入一条数据
 */
var mysql = require('mysql');
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
        console.log('与MySQL数据库建立连接失败');
    }
    else{
        console.log('与MySQL数据库建立连接成功');
        insertData();
    }
});
function insertData() {
    var sqlStr = "call insertuser('测试','嘿嘿',@successFlag); select @successFlag;";
    connection.query(sqlStr,function (err,result) {
        if(err){
            console.log('插入数据失败');
        }
        else{
            console.log(result);
            if(result[1][0]["@successFlag"]=="1"){
                console.log('插入数据成功');
            }
            else{
                console.log('插入数据失败');
            }
            connection.end();
        }
    });
}
