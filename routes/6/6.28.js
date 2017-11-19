/*使用ReadStream*/
var fs = require('fs');
var option = {
    start: 3,
};
var file = fs.createReadStream('./message.txt',option);
// 打开时
file.on('open',function (fd) {
   console.log(fd);
   console.log('开始读取文件');
});
// 读取到文件时
file.on('data',function (data) {
   console.log('读取到数据为：');
   console.log(data);
});
// 当全部读取完时候
file.on('end',function () {
   console.log('数据读完的了');
});
// 当文件被关闭的时候
file.on('close',function () {
   console.log('文件被关闭了')
});
// 当文件读取失败的时候
file.on('error',function () {
   console.log('读取文件失败了');
});
