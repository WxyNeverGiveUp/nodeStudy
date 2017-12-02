/**
 *@fileName: 9.2.3.js
 *@author: 吴晓阳
 *@time: 2017/12/2
 *@description: 子进程对象的disconnect事件回调函数使用示例
 */
var cp = require('child_process');
var sp1 = cp.spawn('node',['test1.js','one','two','three','four'],{stdio:['ipc','pipe','ignore']});
var sp2 = cp.spawn('node',['test2.js'],{stdio:['pipe']});
sp1.stdout.on('data',function (data) {
    console.log('子进程标准输出：' + data);
    sp2.stdin.write(data);
});
sp1.on('exit',function (code,signal) {
    console.log('子进程退出，退出代码为：' + code);
});
sp1.on('error',function (err) {
    console.log('子进程开启失败：'+err);
});
sp1.on('disconnect',function () {
    console.log('IPC通道已被关闭');
});