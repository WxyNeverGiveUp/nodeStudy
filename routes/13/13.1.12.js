/**
 *@fileName: 13.1.12.js
 *@author: 吴晓阳
 *@time: 2017/12/12
 *@description: 指定在查询时利用根据price字段创建索引
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
                    collection.find({
                        type:'food'
                    },{
                        hint:{price:1},
                        max:{price:10},
                        // returnKey:true //是否只返回索引值的结果
                    }).toArray(function (err,docs) {
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
        }
    });
});