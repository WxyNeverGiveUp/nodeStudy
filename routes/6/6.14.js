/*修改文件访问的时间以及修改时间*/
var fs = require('fs');
fs.utimes('./message.txt',new Date(),new Date(),function (err) {
   if (err){
       console.log('修改文件时间操作失败');
   }
   else{
       console.log('修改文件时间操作成功'); // 修改时间会改变
   }
});
/*utimes方法使用示例-同步方法*/
fs.utimesSync('./mess.txt',new Date(),new Date());
