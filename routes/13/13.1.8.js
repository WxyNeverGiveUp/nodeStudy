/**
 *@fileName: 13.1.8.js
 *@author: 吴晓阳
 *@time: 2017/12/11
 *@description: 在查询条件中指定子文档
 */
var mongo = require('mongodb');
var host = 'localhost';
var port = 27017;
var db = new mongo.Db('node-mongo-examples',new mongo.Server(host,port,{auto_reconnect:true}),{safe:true});
var store1 = {name:'store1',goods:{
    type:'food',
    price:11
}};
var store2 = {name:'store2',goods:{
    type:'food',
    price:10
}};
var store3 = {name:'store3',goods:{
    type:'book',
    price:10
}};
var store4 = {name:'store4',goods:{
    type:'food',
    price:1
}};
var store5 = {name:'store5',goods:{
    type:'book',
    price:19
}};
var docs = [store1,store2,store3,store4,store5];
db.open(function (err,db) {
    db.collection('stores',function (err,collection) {
       collection.insert(docs,function (err,docs) {
            if (err){
                throw err;
            }
            else{
                collection.find({
                    goods:{
                        type:'food',
                        price:1
                    } // 等同于collection.find({'goods.type':'food','goods.price':1});
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
