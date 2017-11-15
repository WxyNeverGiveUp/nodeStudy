/*使用appendFile方法使用示例 追加内容*/
var fs = require('fs');
fs.appendFile('./message.txt','这是追加的数据哦','utf8',function (err) {
   if (err){
       console.log('追加文件操作失败');
   }
   else{
       console.log('追加成功了，请查看追加的文件');
   }
});
// 使用同步的方法在文件的底部追加内容
var options = {
  flag: 'a',
};
fs.appendFileSync('./message.txt','这是同步方法增添的内容',options);
console.log('同步的我也加载好了');