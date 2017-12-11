/**
 *@fileName: 13.1.2.js
 *@author: 吴晓阳
 *@time: 2017/12/10
 *@description: 与数据库之间建立建立以及关闭数据库代码的示例
 */
var mongo = require('mongodb');
var host = 'localhost';
var port = 27017;
var server = new mongo.Server(host,port,{auto_reconnect:true});
var db = new mongo.Db('node-mongo-examples',server,{safe:true});
db.open(function (err,db) {
    if(err){
        throw err;
    }
    else{
        console.log('成功建立数据连接');
        db.close();
    }
});
db.on('close',function (err,db) {
    if(err){
        throw err;
    }
    else{
        console.log('成功关闭数据库');
    }
});