/*write方法*/
var fs = require('fs');
var buf = new Buffer('我也爱变成');
// 第一次写入文件
fs.open('./message.txt','w',function (err,fd) {
    fs.write(fd,buf,3,9,0,function (err,written,buffer) {
        if (err){
            console.log('写入文件失败');
        }
        else{
            console.log('写入文件成功');
        }
    })
});
//追加文件
fs.open('./message.txt','a',function (err,fd) {
   fs.write(fd,buf,3,9,0,function (err,written,buffer) {
      fs.write(fd,buf,12,3,null,function (err,written,buffer) {
          if (err){
              console.log('写入文件错误')
          }
          else{
              console.log(console.log('写入文件成功'));
          }
          // 使用fsync方法确保文件全部写入
          fs.fsync(fd);
          // 使用close方法关闭文件
          fs.close(fd);
      });
   });
});