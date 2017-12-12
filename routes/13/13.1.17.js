/**
 *@fileName: 13.1.17.js
 *@author: 吴晓阳
 *@time: 2017/12/12
 *@description: remove方法删除
 */
var mongo = require('mongodb');
var host = 'localhost';
var port = 27017;
var db = new mongo.Db('node-mongo-examples', new mongo.Server(host,port,{auto_reconnect:true}),{safe:true});
db.open(function (err,db) {
    db.collection('goods',function (err,collection) {
        if(err){
            throw err;
        }
        else{
            collection.remove({
                'type':'food',
                'price':100
            },function (err,result) {
                if(err){
                    throw err;
                }
                else{
                    console.log('成功删除%d条数据',result.result.n);
                    collection.find({
                        'type':'food'
                    }).toArray(function (err,docs) {
                        console.log('删除后的数据');
                        console.log(docs);
                        db.close();
                    });
                }
            });
        }
    });
});
