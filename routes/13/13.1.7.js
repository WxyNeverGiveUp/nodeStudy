/**
 *@fileName: 13.1.6.js
 *@author: 吴晓阳
 *@time: 2017/12/11
 *@description: $or的使用方法
 */
var mongo = require('mongodb');
var host = "localhost";
var port = 27017;
var db = new mongo.Db('node-mongo-examples',new mongo.Server(host,port,{auto_reconnect:true}),{safe:true});
db.open(function (err,db) {
    db.collection('goods',function (err,collection) {
        collection.find({
            type:'food',
            $or:[
                {
                    price:{$lt:10} // 查询价格小于10的
                },
                {
                    price:11 // 或价格等于10的
                }
            ]
        }).toArray(function (err,docs) {
            if(err){
                throw err;
            }
            else{
                console.log(docs); // 打印出第一个数据的name
                db.close();
            }
        });
    });
});