/**
 *@fileName: 12.4.2.js
 *@author: 吴晓阳
 *@time: 2017/12/6
 *@description: 使用readline模块朱行读取流数据 使用interface对象读取用户输入行数据
 */
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('close',function () {
    console.log('输入结束！'); // 输入结束时的处理！
});
rl.on('line',function (line) {
    if(line== 'exit' || line=='quit' || line=='q'){
        rl.close();
    }
    else{
        console.log('您输入了：'+line);
    }
});