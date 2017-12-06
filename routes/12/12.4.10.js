/**
 *@fileName: 12.4.10.js
 *@author: 吴晓阳
 *@time: 2017/12/6
 *@description: 信号事件
 */
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line',function (line) {
    if(line == 'exit' || line == 'quit' || line =='q'){
        rl.close();
    }
    else{
        console.log('您输入了:' + line);
    }
});
rl.on('SIGINT',function () { // ctrl+c
    rl.question('你确定要退出吗?y/n\n',function (answer) {
        if(answer.match(/^y(es)?$/i)){
            rl.pause();
        }
    });
});
rl.on('close',function () {
    console.log('行数据读取操作被终止');
    process.exit();
});