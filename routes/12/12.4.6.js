/**
 *@fileName: 12.4.6.js
 *@author: 吴晓阳
 *@time: 2017/12/6
 *@description: resume方法
 */
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line',function (line) {
    if(line == 'q'){
        rl.close(); // 会触发pause事件
    }
    else if(line == 'pause'){
        rl.pause();
        setTimeout(function () {
            rl.resume();
        },10001);
    }
    else{
        console.log('您输入了：'+line);
    }
});
rl.on('resume',function () {
    console.log('数据恢复了！');
});
rl.on('pause',function () {
    var timesRun = 11;
    var interval = setInterval(function(){
        timesRun -= 1;
        if(timesRun === 0){
            clearInterval(interval);
        }
        console.log('还有'+ timesRun + '秒恢复');
    }, 1000);
});
rl.on('close',function () {
    console.log('行数据读取操作被终止！');
});