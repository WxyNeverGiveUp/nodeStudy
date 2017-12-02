/**
 *@fileName: 9.2.7.js
 *@author: 吴晓阳
 *@time: 2017/12/2
 *@description: 使用execFile方法开启子进程
 */
var cp = require('child_process');
var sp1 = cp.execFile('test1.bat',['one','two','three','four'],function (err,stdout,stderr) { // 使用批处理文件
    if (err){
        console.log('子进程开启失败：' + err);
        process.exit();
    }
    else{
        console.log('子进程标准输出：' + stdout.toString());
        sp2.stdin.write(stdout.toString());
    }
});
var sp2 = cp.execFile('test2.bat'); // 使用批处理文件