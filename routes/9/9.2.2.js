/**
 *@fileName: 9.2.2.js
 *@author: 吴晓阳
 *@time: 2017/12/2
 *@description: spawn方法的使用示例
 */
var cp = require('child_process');
var spl = cp.spawn('node',['test1.js','one','two','three','four']);
var sp2 = cp.spawn('node',['test2.js'],{stdio:'pipe'});
spl.stdout.on('data',function (data) {
    console.log('子进程标准输出：' + data);
    sp2.stdin.write(data);
});
spl.on('exit',function (code,signal) {
    console.log('子进程退出，退出代码为：' +code);
    process.exit();
});