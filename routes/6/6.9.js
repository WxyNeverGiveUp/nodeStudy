/*创建与读取目录*/
//创建目录
var fs = require('fs');
fs.mkdir('./test',function (err) {
    if (err){
        console.log('创建目录失败或已存在该目录');
    }
    else{
        console.log('创建目录成功');
    }
});
//同步创建目录
fs.mkdirSync('./testSync');