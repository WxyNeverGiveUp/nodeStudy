/*关于写入的error事件*/
var fs = require('fs');
var out = fs.createWriteStream('fs');
var data = '哈哈';
out.on('error',function (err) {
    console.log('写入文件错误');
    console.log(err);
});
out.write(data,'utf8',function () {
    console.log('写入成功');
});
out.end(); // 终止写入
out.write('我再写点新的东西');
