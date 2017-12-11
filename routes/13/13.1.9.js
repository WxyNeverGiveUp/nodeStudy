/**
 *@fileName: 13.1.9.js
 *@author: 吴晓阳
 *@time: 2017/12/11
 *@description: 在查询条件下指定一个数组的完整的内容
 */
var mongo = require('mongodb');
var host = 'localhost';
var port = 27017;
var db = new mongo.Db('node-mongo-examples',new mongo.Server(host,port,{auto_reconnect:true}),{safe:true});
var article1 = {
    name:'TV',
    tags:[
        '好看',
        '有趣',
        '通用tag'
    ]
};
var article2 = {
    name:'node',
    tags:[
        '还不错',
        '也行',
        '通用tag'
    ]
};
var article3 = {
    name:'foo',
    tags:[
        '无聊',
        '不好看',
        '通用tag'
    ]
};
var docs = [article1,article2,article3];
db.open(function (err,db) {
    db.collection('articles',function (err,collection) {
        collection.insert(docs,function (err,docs) {
            if(err){
                throw err;
            }
            else{
                collection.find({
                    tags:'通用tag' // 包含'通用tag'标签的数据
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
    });
});