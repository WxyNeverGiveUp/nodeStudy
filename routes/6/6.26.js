/*在change时间出发时调用的回调函数中执行文件改变时的处理*/
var fs = require('fs');
var watcher = fs.watch('./message.txt');
watcher.on('change',function (event,filename) {
   console.log(event);
   console.log(filename);
});