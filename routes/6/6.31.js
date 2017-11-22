/**
 * write方法的callback函数
 * */
var fs = require('fs');
var file = fs.createReadStream('./message.txt');
var out = fs.createWriteStream('./anotherMessage.txt');
file.on('data',function (data) {
   out.write(data,function () {
      console.log('写入完成！');
      console.log(out.write());
   });
});