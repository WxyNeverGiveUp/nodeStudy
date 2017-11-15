/*写入文件 writeFile*/
var fs = require('fs');
var options = {
    mode: 0666,
    flag: 'a'
};
fs.writeFile('./test.txt','这是新第一行.\r\n这是新第二行',options,function (err) {
    if (err){
        console.log('写入文件操作失败');
    }
    else{
        console.log('写入成功，请查看对应文件');
    }
});
// 将缓存区的数据写入文件
var data = new Buffer('我爱编程');
fs.writeFile('./test.txt',data,options,function (err) {
   if (err){
       console.log('写文件操作失败');
   }
   else{
       console.log('再一次写入文件成功！');
   }
});