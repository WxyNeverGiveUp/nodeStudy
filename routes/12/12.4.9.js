/**
 *@fileName: 12.4.9.js
 *@author: 吴晓阳
 *@time: 2017/12/6
 *@description: question方法
 */
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('What do you think of Node.js?\n',function (answer) {
    console.log('感谢您的回答，您的评价是：'+answer);
    rl.close();
});