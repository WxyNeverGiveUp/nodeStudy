/**
 *@fileName: 13.2.2.js
 *@author: 吴晓阳
 *@time: 2017/12/13
 *@description: 指定与数据库服务器之间的连接丢失时的处理
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    database : 'test',
    user     : 'root',
    password : ''
});
var pool = mysql.createPool({
    host     : 'localhost',
    port     : 3306,
    database : 'test',
    user     : 'root',
    password : ''
});
function handleDisconnect() {
    connection.connect(function (err) {
        if(err){
            console.log('与MySQL数据库建立连接失败');
        }
        else{
            console.log('与MySQL数据库建立连接成功');
        }
    });
}
connection.on('error',function (err) {
    if(err.code === 'PROTOCOL_CONNECTION_LOST'){
        console.log('与MySQL数据库之间的连接被丢失了，10s后重新连接');
        setTimeout(function () {
            handleDisconnect();
        },10*1000);
    }
    else{
        throw err;
    }
});
handleDisconnect(); // 先执行以下进行连接