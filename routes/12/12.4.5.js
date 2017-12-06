/**
 *@fileName: 12.4.5.js
 *@author: 吴晓阳
 *@time: 2017/12/6
 *@description: interface对象所拥有的各种方法与事件 pause方法
 */
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line',function (line) {
    if(line == 'q'){
        rl.close();
    }
    else if(line == 'pause'){
        rl.pause();
    }
    else{
        console.log('您输入了：'+line);
    }
});
rl.on('pause',function () {
    console.log('暂停读取数据'); // 由于没有恢复事件，所以直接退出
});
rl.on('close',function () {
    console.log('行数据读取操作被终止！');
});