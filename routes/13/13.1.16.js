/**
 *@fileName: 13.1.16.js
 *@author: 吴晓阳
 *@time: 2017/12/12
 *@description: findAndModify 查询并更新
 */
var mongo = require('mongodb');
var host = 'localhost';
var port = 27017;
var db = new mongo.Db('node-mongo-examples',new mongo.Server(host,port,{auto_reconnect:true}),{safe:true});
db.open(function (err,db) {
    db.collection('goods',function (err,collection) {
       collection.findAndModify({
           type:'food'
       },[
            ['type',1],
            ['price',-1]
       ],{
           type:'food',
           price:100,
           newAttr:'这是一个新增的关于商品的描述23213'
       },function (err,doc) {
            if(err){
                throw err;
            }
            else{
                console.log('更新前的文档如下：');
                console.log(doc);
                db.close();
            }
       });
    });
});