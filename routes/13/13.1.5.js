/**
 *@fileName: 13.1.5.js
 *@author: 吴晓阳
 *@time: 2017/12/11
 *@description: 在mongoDB数据库中查询数据
 */
var mongo = require('mongodb');
var host = 'localhost';
var port = 27017;
var db = new mongo.Db('node-mongo-examples',new mongo.Server(host,port,{auto_reconnect:true}),{safe:true});
db.open(function (err,db) {
    db.collection('users',function (err,collection) {
        if(err){
            throw err;
        }
        else{
            collection.find({}).toArray(function (err,docs) {
                if(err){
                    throw err;
                }
                else{
                    console.log(docs);
                    db.close();
                }
            });
        }
    });
});