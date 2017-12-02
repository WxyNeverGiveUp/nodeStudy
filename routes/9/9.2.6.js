/**
 *@fileName: 9.2.6.js
 *@author: 吴晓阳
 *@time: 2017/12/2
 *@description: 使用fork方法不太成功，使用exec方法启动子进程
 */
var cp = require('child_process');
var sp1 = cp.exec('node test1.js one two three four',function (err,stdout,stderr) {
    if (err){
        console.log('子进程开启失败：' + err);
        process.exit();
    }
    else{
        console.log('子进程标准输出：' + stdout.toString());
        sp2.stdin.write(stdout.toString());
    }
});
var sp2 = cp.exec('node test3.js',function (err,stdout,stderr) {
    process.exit();
});