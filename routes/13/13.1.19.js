/**
 *@fileName: 13.1.19.js
 *@author: 吴晓阳
 *@time: 2017/12/12
 *@description: 使用数据框架mongoose
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/node-mongo-examples',function (err) {
    if (err){
        console.log('连接mongoDB数据库失败');
    }
});
var goodsSchema = new Schema({
    type: String,
    price: Number
});
var storeSchema = new Schema({
    name:String,
    goods:[goodsSchema]
});
var store1 = {
    name:'store1',
    goods:[
        {type:'food',price:11}
    ]
};
var store2 = {
    name:'store2',
    goods:[
        {type:'food',price:17}
    ]
};
var store3 = {
    name:'store3',
    goods:[
        {type:'food',price:9}
    ]
};
var store4 = {
    name:'store4',
    goods:[
        {type:'book',price:11}
    ]
};
var store5 = {
    name:'store5',
    goods:[
        {type:'book'}
    ]
};
var docs = [store1,store2,store3,store4,store5];
var newStores = mongoose.model('newStores',storeSchema);
newStores.create(docs,function (err,docs) {
    if(err){
        console.log('保存新数据失败');
    }
    else{
        newStores.find(function (err,docs) {
            if(err){
                console.log('查询数据失败');
            }
            else{
                console.log('添加成功，添加数据如下');
                console.log(docs);
                mongoose.disconnect();
            }
        });
    }
});