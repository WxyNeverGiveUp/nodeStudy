/**
 *@fileName: 13.1.12.js
 *@author: 吴晓阳
 *@time: 2017/12/12
 *@description: explain属性展示
 */
var mongo = require('mongodb');
var host = 'localhost';
var port = 27017;
var db = new mongo.Db('node-mongo-examples',new mongo.Server(host,port,{auto_reconnection:true}),{safe:true});
db.open(function (err,db) {
    db.collection('goods',function (err,collection) {
        if (err){
            throw err;
        }
        else{
            collection.createIndex({
                price:1
            },function (err,indexName) {
                if(err){
                    throw err;
                }
                else{
                    console.log(indexName);
                    // collection.find({
                    //     type:'food'
                    // },{
                    //     explain:true, // 返回查询时的详细信息并不返回查询结果
                    //     row:true // 是否将二进制BSON数据文档存放在缓存区中并返回
                    // }).toArray(function (err,docs) {
                    //     if(err){
                    //         throw err;
                    //     }
                    //     else{
                    //         console.log(docs[0]);
                    //         db.close();
                    //     }
                    // });
                    collection.findOne({
                        type:'food'
                    },{
                        // row:true // 将二进制BSON数据文档存放在缓存区中并返回
                    },function (err,docs) {
                        console.log(docs);
                    });
                }
            });
        }
    });
});