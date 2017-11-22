/*关于drain事件，观察期触发的时机*/
var fs = require('fs');
var readStream = fs.createReadStream('./test.mp4');
var out = fs.createWriteStream('./test2.mp4');
readStream.on('data',function (data) {
   var flag = out.write(data);
   console.log(flag);
});
out.on('drain',function () {
   console.log('操作系统缓存区中的数据已经全部输出');
});