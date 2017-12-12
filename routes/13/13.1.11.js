/**
 *@fileName: 13.1.11.js
 *@author: 吴晓阳
 *@time: 2017/12/12
 *@description: 设置fields来避免查询
 */
var mongo = require('mongodb');
var util = require('util');
var host = 'localhost';
var port = 27017;
var db = new mongo.Db('node-mongo-examples',new mongo.Server(host,port,{auto_reconnect:true}),{safe:true});
db.open(function (err,db) {
    db.collection('users',function (err,collection) {
       if (err){
           throw err;
       }
       else{
           collection.find({
               'username':'晓阳'
           },{
               // fields:{ // 指定部分显示
               //     // 'firstname':1,
               //     'username':1,
               //     '_id':0
               // },
               // sort:{ // 指定升降序
               //     'firstname': -1
               // },
               limit:1, // 只显示1条
               skip:1 // 跳跃条数 跳跃了69b那一条
           }).toArray(function (err,docs) {
               if(err){
                   throw err;
               }
               else{
                   console.log(util.inspect(docs,{depth:3}));
                   db.close();
               }
           });
       }
    });
});