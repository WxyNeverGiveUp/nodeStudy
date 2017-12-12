/**
 *@fileName: 13.1.20.js
 *@author: 吴晓阳
 *@time: 2017/12/12
 *@description: 使用mongoose的小练习 加深理解
 */
var mongoose = require('mongoose'); // 引用mongoose模块
var Schema = mongoose.Schema; // 定义骨架
var db = mongoose.createConnection('localhost','test'); // 创建一个数据库连接
db.on('error',console.error.bind(console,'连接错误'));
db.once('open',function () {
    console.log('打开成功');
});
// 定义一个Schema
var PersonSchema = new Schema({
    name:String // 定义一个属性name，类型为String
});
// 为此框架Schema创建方法
PersonSchema.methods.speak = function () {
    console.log('我的名字叫'+this.name);
};
// 将该Schema发布为Model 可对数据库进行操作
var PersonModel = db.model('person',PersonSchema);
// 创建实例
var PersonEntity = new PersonModel({
    name:'wxy'
});
console.log(PersonEntity); // =>wxy 打印这个实体
PersonEntity.speak();
PersonEntity.save();  //执行完成后，数据库就有该数据了
