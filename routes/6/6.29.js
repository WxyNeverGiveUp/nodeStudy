/*readStream的暂停方法pause与恢复方法resume*/
var fs = require('fs');
var readStream = fs.createReadStream('./message.txt');
readStream.pause();
readStream.on('data',function (data) {
    console.log('获取的数据为：' + data);
});
setTimeout(function () {
   readStream.resume();
},1000);
console.log('一秒后读数据：');
