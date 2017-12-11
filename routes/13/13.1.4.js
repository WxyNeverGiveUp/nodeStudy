/**
 *@fileName: 13.1.4.js
 *@author: 吴晓阳
 *@time: 2017/12/11
 *@description: close方法中forceClose参数值的使用示例
 */
var mongo = require('mongodb');
var host = 'localhost'; // 主机默认为localhost
var port = 27017; // 端口默认为27017
var db = new mongo.Db('node-mongo-examples',new mongo.Server(host,port,{auto_reconnect:true}),{safe:true});
db.open(function (err,db) {
    db.collection('users',function (err,collection) {
         collection.insert({
             'username': '晓阳',
             'firstname': '吴',
             'description': '此人是本数据库的管理员1'
         },function (err,docs) {
             if(err){
                 throw  err;
             }
             else{
                 console.log(docs);
                 db.close(false);
             }
         });
    });
});
db.once('close',function (err) {
    if(err){
        throw err;
    }
    else{
        db.open(function (err,db) {
            db.collection('users',function (err,collection) {
                collection.insert({
                    'username': '三',
                    'firstname': '张'
                },function (err,docs) {
                    if(err){
                        throw err;
                    }
                    else{
                        console.log(docs);
                        db.close(true);
                    }
                });
            });
        });
    }
});