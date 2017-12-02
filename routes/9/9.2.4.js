/**
 *@fileName: 9.2.4.js
 *@author: 吴晓阳
 *@time: 2017/12/2
 *@description: 使用fork方法开启子进程 fork方法返回一个隐式创建的代表子进程的ChildProcess
 * send方法的使用示例
 */
var cp = require('child_process');
var sp1 = cp.fork('./test1.js',['one','two','three','four'],{silent:true});
var sp2 = cp.fork('test2.js');
sp1.stdout.on('data',function (data) {
    console.log('子进程标准输出：' + data);
    sp2.send(data.toString());
});
sp1.on('exit',function (code,signal) {
    console.log('子进程退出，退出代码为：' + code);
    process.exit();
});
sp1.on('error',function (err) {
    console.log('子进程开启失败：' + err);
    process.exit();
});

