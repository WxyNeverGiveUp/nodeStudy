/**
 *@fileName: 13.1.10.js
 *@author: 吴晓阳
 *@time: 2017/12/11
 *@description: 指定某个子数据文档的某个元素的查询条件
 */
var mongo = require('mongodb');
var util = require('util');
var host = 'localhost';
var port = 27017;
var db = new mongo.Db('node-mongo-examples',new mongo.Server(host,port,{auto_reconnect:true}),{safe:true});
var food1 = {type:'food',price:11};
var food2 = {type:'food',price:10};
var food3 = {type:'food',price:9};
var food4 = {type:'food',price:8};
var foods = [food1,food2,food3,food4];
var store1 = {name:'store1',goods:foods};
var book1 = {type:'book1',price:15};
var book2 = {type:'book1',price:9};
var book3 = {type:'book1',price:5};
var book4 = {type:'book1',price:10};
var books = [book1,book2,book3,book4];
var store2 = {name:'store2',goods:books};
var stores = [store1,store2];
db.open(function (err,db) {
    db.collection('stores',function (err,collection) {
        collection.insert(stores,function (err,docs) {
            if (err){
                throw err;
            }
            else{
                collection.find({
                    'goods.type':'food', // 查goods数组中第一个对象
                    'goods.price':{$lte:10}
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
});