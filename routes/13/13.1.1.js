/**
 *@fileName: 13.1.1.js
 *@author: 吴晓阳
 *@time: 2017/12/10
 *@description: 连接mongodb数据库
 */
// 使用 npm install mongo下载到本地
var mongo = require('mongodb');
var server = new mongo.Server('127.0.0.1','27017'); // 创建代表mongoDB所在服务器的对象
var db = new mongo.Db('admin',server); // 创建mongoDB所在服务器下的代表某数据库的Db对象
db.open(function (err,db) { // 使用Db对象的open方法操作一个数据库
    console.log(db);
});
console.log(server);