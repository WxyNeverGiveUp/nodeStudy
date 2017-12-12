/**
 *@fileName: 13.1.15.js
 *@author: 吴晓阳
 *@time: 2017/12/12
 *@description: 在MongoDB数据库中更新与删除数据
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
            collection.update({
                'firstname':'张'
            },{
                $set:{'firstname':'刘'} // 使用multi 必须使用原子操作符$set
            },{
                multi:true,
                journal:true
            },function (err,result) {
                if(err){
                    throw err;
                }
                else{
                    console.log('成功更新%d条数据',result.result.n); // result.result.n 是更新成功的条数
                    collection.find({
                        'firstname':'刘'
                    }).toArray(function (err,docs) {
                        console.log('更新数据如下：');
                        console.log(docs);
                        db.close();
                    });
                }
            });
        }
    });
});