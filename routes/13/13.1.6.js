/**
 *@fileName: 13.1.6.js
 *@author: 吴晓阳
 *@time: 2017/12/11
 *@description: 同时制定多个字段值的查询条件
 */
var mongo = require('mongodb');
var host = "localhost";
var port = 27017;
var db = new mongo.Db('node-mongo-examples',new mongo.Server(host,port,{auto_reconnect:true}),{safe:true});
var docs = [
    {
        type:'food',
        name:'newFood',
        price:11
    },
    {
        type:'book',
        name:'newbook',
        price:12
    }
];
db.open(function (err,db) {
    db.collection('goods',function (err,collection) {
       collection.insert(docs,function (err,docs) {
           if(err){
               throw err;
           }
           else{
               collection.find({
                   type:'food',
                   price:{$lt:10}
               }).toArray(function (err,docs) {
                   if(err){
                       throw err;
                   }
                   else{
                       console.log(docs[1].name); // 打印出第一个数据的name
                       db.close();
                   }
               });
           }
       });
    });
});