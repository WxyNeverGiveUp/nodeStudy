/**
 *@fileName: 13.1.18.js
 *@author: 吴晓阳
 *@time: 2017/12/12
 *@description: 查询并删除一条数据
 */
var mongo = require('mongodb');
var host = 'localhost';
var port = 27017;
var db = new mongo.Db('node-mongo-examples',new mongo.Server(host,port,{auto_recnnect:true}),{safe:true});
db.open(function (err,db) {
    db.collection('goods',function (err,collection) {
        if(err){
            throw err;
        }
        else{
            collection.findAndRemove({
                'name':'newFood'
            },[
                ['type',-1],
                ['price',1]
            ],function (err,doc) {
                if(err){
                    throw err;
                }
                else{
                    console.log(doc);
                    db.close();
                }
            });
        }
    });
});