/*使用writeFile方法复制图片文件*/
var fs = require('fs');
fs.readFile('./a.png','base64',function (err,data) {
    // 写入的数值为data.toString()
    fs.writeFile('./b.png',data.toString(),'base64',function (err) {
       if (err){
           console.log('写文件操作失败');
       }
       else{
           console.log('写文件操作成功');
       }
    });
});