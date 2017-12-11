/**
 *@fileName: 13.1.3.js
 *@author: 吴晓阳
 *@time: 2017/12/10
 *@description: 在mongoDB数据库中插入数据,将user对象插入到MongoDB数据库中
 */
var mongo = require('mongodb');
var host = 'localhost';
var port = 27017;
var db = new mongo.Db('node-mongo-examples',new mongo.Server(host,port,{auto_reconnect:true}),{safe:true});
db.open(function (err,db) {
    db.collection('users',function (err,collection) {
        collection.insert({'username':'晓阳2','firstname':'吴'},
        function (err,docs) {
            console.log(docs);
            db.close();
        });
    });
});
