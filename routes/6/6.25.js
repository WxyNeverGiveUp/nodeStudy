/*使用fs.FSWatcher对象的close方法停止对文件的监视*/
var fs = require('fs');
var watcher = fs.watch('./message.txt',function (event,filename) {
   console.log(event);
   console.log(filename);
   // 监视一次后就停止对文件的监视
   watcher.close(); // 停止监视 第一次修改会打印出内容，再修改就不会打印出内容了
});